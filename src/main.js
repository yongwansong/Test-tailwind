/**
 * imports
 */
import './css/main.css'
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Alpine from 'alpinejs'
//Alpine plugins
import mask from '@alpinejs/mask'
import intersect from '@alpinejs/intersect'
import persist from '@alpinejs/persist'
import focus from '@alpinejs/focus'
import collapse from '@alpinejs/collapse'
import morph from '@alpinejs/morph'


//mixins global functions
import mixins from  "@/alpine/mixins"
//stores
import { mobileMenu } from "@/alpine/store/mobile-menu";
//components
import components from "@/alpine/components";


window.Alpine = Alpine
//plugins more info here https://alpinejs.dev/start-here
Alpine.plugin(mask)
Alpine.plugin(intersect)
Alpine.plugin(persist)
Alpine.plugin(focus)
Alpine.plugin(collapse)
Alpine.plugin(morph)

//stores
Alpine.store('mobile-menu', mobileMenu) // use global search 'mobile-menu' how this used
//components/
Alpine.data('mixins', mixins) //use global key for use reusable handler global.appendParameter()
Alpine.data('addressesSwitch', components.addressesSwitch) // use global search 'addressesSwitch' how this used
Alpine.data('productGallery', components.productGallery)
Alpine.data('productVariantSelector', components.productVariantSelector)
Alpine.data('templateSwitch', components.templateSwitch)

Alpine.start()