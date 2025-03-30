# challenge-qa-automation-lead

Pasos a seguir para la ejecución del proyecto

# Instalar Node

# Intalación de dependencias

Acceder al directorio en donde clonamos el proyecto

cd .../challenge-qa-automation-lead

npm install

# Abrir/Ejecutar cypress

npx cypress open --config-file cypress/config/prod.config.ts

Al ejecutar el comando con run (en lugar de open) cuando la ejecución termine, se generará en cypress/results/ el reporte correspondiente.