{{notice}}

<nav aria-label="breadcrumb">
  <ol class="breadcrumb">
    <li class="breadcrumb-item"><a href="/doc/">Documentation</a></li>
    <li class="breadcrumb-item"><a href="/doc/bonding/">Bonding</a></li>
    <li class="breadcrumb-item active" aria-current="page">Options</li>
  </ol>
</nav>

# Bonding Options

- `type` - (enum) The bond type, one of `['c', 'i', 'm']`
- `count` - (Number) The combined sigma / pi bonding count, if covalent

```js
{
    type: 'c', // One of: c (Covalent), i (Ionic), m (Metallic)
    count: 1, // Combined sigma / pi bonding count for covalent
}
```