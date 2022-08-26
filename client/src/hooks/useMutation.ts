/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react';

interface useMutationOptions<TData> {
  onSuccess?: (data: TData) => void;
  onFailure?: (error: string) => void;
}

interface MutationState<TData> {
  data: TData | null;
  error?: string;
  isError: boolean;
  isLoading: boolean;
}

export default function useMutation<TData = any, TVariables = any>(
  requestFunc: (variables?: TVariables) => Promise<TData>,
  { onSuccess, onFailure }: useMutationOptions<TData>
) {
  const [state, setState] = useState<MutationState<TData>>({
    data: null,
    error: '',
    isError: false,
    isLoading: false,
  });

  const mutate = async (variables?: TVariables) => {
    setState({
      ...state,
      isLoading: true,
    });
    try {
      const data = await requestFunc(variables);
      setState({
        ...state,
        data,
      });
      onSuccess && onSuccess(data);
    } catch (error) {
      const errorMessage = (error as Error).message;
      setState({
        ...state,
        isError: true,
        error: errorMessage,
      });
      onFailure && onFailure(errorMessage);
    } finally {
      setState({
        ...state,
        isLoading: false,
      });
    }
  };

  return {
    mutate,
    ...state,
  };
}
