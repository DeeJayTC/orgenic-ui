# og-calendar-group



<!-- Auto Generated Below -->


## Properties

| Property           | Attribute            | Description | Type                 | Default                    |
| ------------------ | -------------------- | ----------- | -------------------- | -------------------------- |
| `dateDecorator`    | --                   |             | `OgDateDecorator`    | `undefined`                |
| `displayedMonths`  | `displayed-months`   |             | `number`             | `1`                        |
| `loc`              | `loc`                |             | `string`             | `getDefaultLocale()`       |
| `month`            | `month`              |             | `number`             | `new Date().getMonth()`    |
| `selection`        | --                   |             | `OgCalendarDate[]`   | `[]`                       |
| `selectionType`    | `selection-type`     |             | `"none" \| "single"` | `'single'`                 |
| `showCalendarWeek` | `show-calendar-week` |             | `boolean`            | `true`                     |
| `year`             | `year`               |             | `number`             | `new Date().getFullYear()` |


## Events

| Event              | Description | Type                            |
| ------------------ | ----------- | ------------------------------- |
| `dateClicked`      |             | `CustomEvent<OgCalendarDate>`   |
| `selectionChanged` |             | `CustomEvent<OgCalendarDate[]>` |


## Dependencies

### Used by

 - [og-datepicker](..\og-datepicker)

### Depends on

- [og-calendar](..\og-calendar)

### Graph
```mermaid
graph TD;
  og-calendar-group --> og-calendar
  og-datepicker --> og-calendar-group
  style og-calendar-group fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*