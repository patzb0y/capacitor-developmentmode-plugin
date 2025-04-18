# capacitor-developmentmode-plugin

Disable app if android phone is in development mode

## Install

```bash
npm install capacitor-developmentmode-plugin
npx cap sync
```

## API

<docgen-index>

* [`echo(...)`](#echo)
* [`isDeveloperModeEnabled()`](#isdevelopermodeenabled)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### echo(...)

```typescript
echo(options: { value: string; }) => Promise<{ value: string; }>
```

| Param         | Type                            |
| ------------- | ------------------------------- |
| **`options`** | <code>{ value: string; }</code> |

**Returns:** <code>Promise&lt;{ value: string; }&gt;</code>

--------------------


### isDeveloperModeEnabled()

```typescript
isDeveloperModeEnabled() => Promise<{ developerMode: boolean; }>
```

**Returns:** <code>Promise&lt;{ developerMode: boolean; }&gt;</code>

--------------------

</docgen-api>
