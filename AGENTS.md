# Development Guidelines

This document outlines the architectural and coding standards that must be followed for this project.

## Architecture

- **Domain-Driven Design (DDD)**: Organize code around business domains and use cases. Separate domain logic from infrastructure and presentation layers.
- **Scream Architecture**: Structure the project to scream its purpose. Organize by features rather than by technical layers.
- **Clean Architecture**: Enforce the dependency rule. Inner layers must not depend on outer layers. Use interfaces and abstractions to decouple components.

## Styling

- **CSS Modules**: Use CSS Modules exclusively for styling. Do not use global CSS, styled-components, or Tailwind CSS unless explicitly approved.

## Imports

- **Absolute Paths**: Always use absolute paths with the `@` prefix for imports (e.g., `@/components/Button`, `@/hooks/useAuth`). Configure `paths` in `tsconfig.json` to support this pattern.

## General Best Practices

- Write clean, maintainable, and testable code.
- Avoid tight coupling between components.
- Keep functions and components small and focused.
- Use meaningful and descriptive names.
- Add type definitions for all data structures.
