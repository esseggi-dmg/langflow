import {
  REFETCH_SERVER_HEALTH_INTERVAL,
  SERVER_HEALTH_INTERVAL,
} from "@/constants/constants";
import useFlowsManagerStore from "@/stores/flowsManagerStore";
import useFlowStore from "@/stores/flowStore";
import { useUtilityStore } from "@/stores/utilityStore";
import { createNewError503 } from "@/types/factory/axios-error-503";
import { keepPreviousData } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { useQueryFunctionType } from "../../../../types/api";
import { api } from "../../api";
import { UseRequestProcessor } from "../../services/request-processor";

interface getHealthResponse {
  status: string;
  chat: string;
  db: string;
  folder: string;
  variables: string;
}

export const useGetHealthQuery: useQueryFunctionType<
  undefined,
  getHealthResponse
> = (options) => {
  const { query } = UseRequestProcessor();
  const setHealthCheckTimeout = useUtilityStore(
    (state) => state.setHealthCheckTimeout,
  );
  const healthCheckTimeout = useUtilityStore(
    (state) => state.healthCheckTimeout,
  );
  const isBuilding = useFlowStore((state) => state.isBuilding);
  const isLoading = useFlowsManagerStore((state) => state.isLoading);

  /**
   * Fetches the health status of the API.
   *
   * @returns {Promise<AxiosResponse<TransactionsResponse>>} A promise that resolves to an AxiosResponse containing the health status.
   */
  async function getHealthFn() {
    try {
      const timeoutPromise = new Promise<never>((_, reject) =>
        setTimeout(() => reject(createNewError503()), SERVER_HEALTH_INTERVAL),
      );

      const apiPromise = api.get<{ data: getHealthResponse }>("/health");
      const response = await Promise.race([apiPromise, timeoutPromise]);
      setHealthCheckTimeout(null);
      return response.data;
    } catch (error) {
      const isServerBusy =
        healthCheckTimeout === null &&
        (error as AxiosError)?.response?.status === 503;

      const isServerTimeout = isServerBusy && !isBuilding && !isLoading;
      const isServerDown =
        healthCheckTimeout === null && !isBuilding && !isLoading;

      if (isServerTimeout) {
        setHealthCheckTimeout("timeout");
      } else if (isServerDown) {
        setHealthCheckTimeout("serverDown");
      }
      throw error;
    }
  }

  const queryResult = query(["useGetHealthQuery"], getHealthFn, {
    placeholderData: keepPreviousData,
    refetchInterval: REFETCH_SERVER_HEALTH_INTERVAL,
    retry: false,
    ...options,
  });

  return queryResult;
};
