module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: ['airbnb-base', 'plugin:prettier/recommended'],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  rules: {
    // El método para indicar las reglas normalmente es:
    // Indicar en primera instancia el nivel de alerta ya sea 0 = 'off', 1 = 'warn', 2 = 'error'
    // Y a partir de ahí a que lo vamos a aplicar dependiendo de si es solo a un apartado o varios, ver siguientes reglas
    'prettier/prettier': 'error',
    // Con la siguiente restricción evitamos que nos indique el uso de for of no es buena opción
    // Se ha investigado en la red y es buena opción de hecho
    'no-restricted-syntax': ['off', 'ForOfStatement'],
    // Con esta restricción indicamos que no nos alerte cuando escribamos la extensión de alguno de los siguientes archivos
    'import/extensions': [
      'off',
      {
        js: 'never'
      }
    ]
  }
  // 'no-restricted-syntax': 'ForOfStatement'
};
