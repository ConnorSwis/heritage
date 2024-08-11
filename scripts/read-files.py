import os


def write_file_contents(output_filename, excluded_dirs, excluded_files):

    os.makedirs(os.path.dirname(output_filename), exist_ok=True)

    with open(output_filename, 'w', encoding='utf-8') as output_file:
        for root, dirs, files in os.walk('.'):

            dirs[:] = [d for d in dirs if d not in excluded_dirs]

            for file in files:

                if file in excluded_files:
                    continue

                file_path = os.path.join(root, file)
                output_file.write(f"@/{os.path.relpath(file_path)}\n```\n")

                try:
                    with open(file_path, 'r', encoding='utf-8') as f:
                        contents = f.read()

                        output_file.write(contents)
                except Exception as e:
                    output_file.write(f"Error reading file: {str(e)}\n")
                finally:
                    output_file.write("\n```\n\n")


excluded_dirs = [".git", "venv", "node_modules", "build", "dist", "target",
                 ".expo", ".vscode", "assets", "app-example", "scripts", "components", "constants", 'hooks']
excluded_files = ["package.json", "package-lock.json", "README.md",
                  "tsconfig.json", ".gitignore", "expo-env.d.ts", "babel.config.js", "app.json"]


write_file_contents("scripts/output/output.txt", excluded_dirs, excluded_files)
