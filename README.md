# Storybook Vue 3 Template

Template base con **Vue 3**, **Storybook 10**, **Vitest** y **Testing Library**.

## Stack

- **Vue 3** + Composition API (script setup)
- **Vite** como bundler
- **Storybook 10** con `@storybook/vue3-vite`
- **Vitest** para unit tests
- **Testing Library** (`@testing-library/vue` + `@testing-library/user-event` + `@testing-library/jest-dom`)
- **Playwright** para Storybook interaction tests

## Scripts

```bash
# Desarrollo
npm run dev

# Storybook
npm run storybook

# Tests unitarios (watch)
npm test

# Tests unitarios (single run)
npm run test:run

# Tests con coverage
npm run test:coverage

# Build
npm run build
npm run build-storybook
```

## Estructura

```
src/
├── components/
│   ├── BaseButton.vue              # Componente ejemplo
│   ├── BaseButton.stories.js       # Stories de Storybook
│   ├── BaseButton.test.js          # Tests con Testing Library
│   ├── BaseCard.vue
│   ├── BaseCard.stories.js
│   └── BaseCard.test.js
├── stories/                        # Stories de ejemplo de Storybook
├── test/
│   └── setup.js                    # Setup de Testing Library + jest-dom
├── App.vue
└── main.js
```

## Convenciones

- **Componentes**: `PascalCase.vue` en `src/components/`
- **Stories**: `ComponentName.stories.js` junto al componente
- **Tests**: `ComponentName.test.js` junto al componente
- **Testing Library**: usar queries semánticas (`getByRole`, `getByText`) sobre selectores de DOM
