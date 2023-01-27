// DOCS https://alpinejs.dev/globals/alpine-data
// Check main.js file how to register components

export const productVariantSelector = ({currentVariant, productOptions, productVariants, productTitle}) => ({
  currentVariant, // type: Object
  productOptions, // type: Object
  productVariants, // type: Object
  selectedVariant: currentVariant,
  productTitle,
  selectOption({ name }, $event) {
    const selectedValue = $event.target.value
    const selectedOption = this.productOptions.find(option => option.name === name)
    const allOptionValuesWithoutSelected = selectedOption.values.filter(value => value !== selectedValue)

    const targetOptions = [
      selectedValue,
      ... this.selectedVariant.options.filter(value => !allOptionValuesWithoutSelected.includes(value))
    ]

    this.productVariants.some(variant => {
      if (variant.options.every(option => targetOptions.includes(option))) {
        this.selectedVariant = variant

        this.goToVariant(this.selectedVariant.id)
        return true
      }
    })
  },
  goToVariant(value) {
    const url = new URL(window.location)
    url.searchParams.set('variant', value)
    window.history.replaceState({}, this.productTitle, url);
  }
});