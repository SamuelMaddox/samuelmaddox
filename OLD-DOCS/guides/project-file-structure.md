# Project File Structure

```txt
📁 src
================================================================================
| 📁 API
| | 📁 FirstAPI
| | | 📄 index.ts
| | | 📄 Types.ts
================================================================================
| 📁 Components
| | 📁 Core
| | | 📁 FirstComponent
| | | | 📁 Assets
| | | | | 📄 icon.svg
| | | | 📁 Hooks
| | | | | 📄 UseFirstHook.ts
| | | | 📁 Utils
| | | | | 📄 FirstUtil.ts
| | | 📄 index.ts
| | | 📄 index.test.tsx
| | | 📄 Styles.ts
| | | 📄 Types.ts
================================================================================
| 📁 Config
| | 📁 FirstCategoryConfig
| | | 📄 OneFirstCategoryConfig.ts
| | | 📄 TwoFirstCategoryConfig.ts
| | | 📄 index.ts
| | | 📄 Types.ts
================================================================================
| 📁 Contexts
| | 📁 FirstContext
| | | 📄 index.ts
| | | 📄 Types.ts
================================================================================
| 📁 Font
| | 📁 FontName
| | | 📄 FontNameRegular.ttf
| | | 📄 FontNameItalic.ttf
| | | 📄 FontNameBold.ttf
| | | 📄 FontNameBoldItalic.ttf
| | 📄 FontName.css
================================================================================
| 📁 Hooks
| | 📁 UseFirstHook
| | | 📁 Utils
| | | | 📄 FirstUtil.ts
| | | 📄 index.ts
| | | 📄 Types.ts
================================================================================
| 📁 Layouts
| | 📁 MainLayout
| | | 📄 index.ts
| | | 📄 index.test.tsx
| | | 📄 Styles.ts
| | | 📄 Types.ts
================================================================================
| 📁 Modules
| | 📁 Layout
| | | 📁 MainHeader
| | | | 📁 Assets
| | | | | 📄 pic.png
| | | | 📁 Components
| | | | | ...
| | | | 📁 Hooks
| | | | | 📄 UseFirstHook.ts
| | | | 📁 Utils
| | | | | 📄 FirstUtil.ts
| | | | 📄 index.ts
| | | | 📄 index.test.tsx
| | | | 📄 Styles.ts
| | | | 📄 Types.ts
================================================================================
| 📁 Pages
| | 📁 Core
| | | 📁 HomePage
| | | | 📁 Assets
| | | | | 📄 pic.png
| | | | 📁 Hooks
| | | | | 📄 UseFirstHook.ts
| | | | 📄 index.ts
| | | | 📄 index.test.tsx
| | | | 📄 Styles.ts
| | | | 📄 Types.ts
================================================================================
| 📁 SharedAssets
| | 📁 GroupOne
| | | 📄 pic.png
================================================================================
| 📁 Types
| | 📁 GroupOne
| | | 📁 Classes
| | | | 📄 FirstClassType.ts
| | | 📁 Enums
| | | | 📄 FirstEnumType.ts
| | | 📁 Interfaces
| | | | 📄 FirstInterfaceType.ts
================================================================================
| 📁 Utils
| | 📁 Core
| | | 📁 Constants
| | | | 📄 TimeConstants.ts
| | | 📁 FirstUtil.ts
| | | | 📄 FirstUtil.ts
| | | | 📄 index.ts
| | | | 📄 Types.ts
| | 📁 TestUtils
| | | 📄 RenderPage.tsx
| 📄 App.test.tsx
| 📄 App.tsx
| 📄 index.css
| 📄 index.tsx
```

## File Structure Conventions

- Folders & Files in `/src` should use `PascalCase` for file names except for the following:

  - `/src/**/index.ext`
  - `/src/react-app-env.d.ts`
  - `/src/reportWebVitals.ts`
  - `/src/setupTests.ts`

- Folders in `/public` should use `PascalCase`, and files should use `camelCase`.

- The main code for a folder should be in a file sharing the same name as the folder. There should also be an `index.ts` file inside of that folder that is used to import then export the main code. This is to avoid having multiple files opened in your editor all named `index.ts` while also avoiding imports that look like `./ComponentName/ComponentName`.

- The top level `Components` folder should be for generic, used anywhere components (Like`HamburgerButton`, `SideNav`, `Input`). `Components` can have other `Components` as children.

- The top level`Modules` are really big (epic or feature level) components made up of smaller components. `Modules` can have other `Modules` and `Components` as children. The hope is that individual `Modules` should not be aware of other sibling `Modules`. The `src/API`, `src/Contexts`, and `src/Hooks` should help facilitate the communication across sibling `Modules`.

- Types should be defined in the `/src/Types` directory with the following exceptions:

  - [Emotion Styled Components](#emotion-styled-components) Types can be saved in the same file as the styles are.
  - Types used exclusively for `./Utils/TestUtils` can be defined in the same file as the utility function.
  - TODO: Why do I have a ./Types.ts in most folders above? Do i needs types for props? should I use ./Types.ts for those and write an exception rule here? is there type checking/optional fields for props in typescript? what if local ./types.ts files were for types used only within that component, while the global ./Types folder is used for types that are shared across files?

- Rule 1: When a type is used in only one place, put it in the same folder or file where it's used. (When types are truly single-use, don't be afraid to inline them, see below)

```ts
export const MyComponent = (props: { foo: string; bar: number }) => {
  // ...
};
```

- Rule 2: Types that are used in more than one place should be moved to a shared location. (Move up the file tree only as far as is needed to be accessible to the places that need it)

- PascalCase is conventionally used for React components, while kebab-case is often preferred for other files, including utility functions, stylesheets, and configuration files.
