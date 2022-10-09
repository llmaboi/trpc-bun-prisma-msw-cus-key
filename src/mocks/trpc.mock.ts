import { JSONRPC2 } from '@trpc/server/dist/rpc';

export function trpcMock({
  data,
  ...opts
}: { data: unknown } & JSONRPC2.ResultResponse): JSONRPC2.ResultResponse {
  return {
    result: { data },
  };
}
