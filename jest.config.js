module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  modulePaths: ["<rootDir>/src/"],
  testPathIgnorePatterns: ["dist", "node_modules"],
};
