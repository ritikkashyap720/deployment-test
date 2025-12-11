module.exports = {
    apps: [
      {
        name: "backend",
        script: "index.js",       // Your entry file
        instances: 3,             // Use 1 for development laptop
        exec_mode: "fork",        // "cluster" recommended for production
        watch: false,             // Avoid watching during CI/CD
        env: {
          NODE_ENV: "development"
        },
        env_production: {
          NODE_ENV: "production"
        },
        max_memory_restart: "300M", // Restart if memory exceeds 300 MB
        error_file: "./logs/error.log",
        out_file: "./logs/out.log",
        merge_logs: true,
        time: true                // Adds timestamp to logs
      }
    ]
  };
  