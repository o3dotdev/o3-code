export function isPidRunning(pid: number): boolean {
  if (!Number.isInteger(pid) || pid <= 0) {
    return false;
  }

  try {
    process.kill(pid, 0);
    return true;
  } catch {
    return false;
  }
}

export async function waitFor(
  predicate: () => boolean | Promise<boolean>,
  {
    intervalMs = 200,
    timeoutMs,
  }: {
    readonly intervalMs?: number;
    readonly timeoutMs: number;
  },
): Promise<boolean> {
  const deadline = Date.now() + timeoutMs;
  while (Date.now() <= deadline) {
    if (await predicate()) {
      return true;
    }
    await new Promise((resolve) => setTimeout(resolve, intervalMs));
  }
  return false;
}

export function messageFromError(error: unknown): string {
  return error instanceof Error ? error.message : String(error);
}
