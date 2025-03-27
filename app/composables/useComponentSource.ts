export const useComponentSource = () => {
  const getComponentSource = async (
    componentName: string
  ): Promise<string | null> => {
    try {
      const sourceModules = await import.meta.glob("../components/**/*.vue", {
        query: "?raw",
        import: "default",
        eager: true,
      });

      const matchingSourcePath = Object.keys(sourceModules).find((path) =>
        path.includes(componentName)
      );

      if (matchingSourcePath) {
        const source = sourceModules[matchingSourcePath];
        return (source as string) || null;
      }

      return null;
    } catch (error) {
      console.error("Failed to load component source:", error);
      return null;
    }
  };

  return { getComponentSource };
};
