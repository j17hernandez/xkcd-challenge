import { mapState } from 'vuex'
import Swal from 'sweetalert2'
const GlobalMixin = {
  data() {
    return {
      loading: false,
    }
  },
  computed: {
    ...mapState(['numberMaxComic']),
    // Computada que retorna el número máximo de comics en la API
    $getNumberMax() {
      return this.numberMaxComic
    },
  },
  methods: {
    // Función de axios con método get, que recibe como parametro la URL
    $list(path) {
      return this.$axios.get(path)
    },
    // Función para disparar un error cuando ocurra algún problema
    $error(err) {
      this.$swal('Oops! algo a ocurrido', err, 'error')
    },
    // Función para mostrar alertas
    $swal(text, err, typeIcon) {
      Swal.fire({
        title: text,
        text: err,
        icon: typeIcon,
        confirmButtonColor: '#3085d6',
      })
    },
    /* Función para obtener un número aleatorio entre 
     el rango del número máximo de comics */
    $getNumberRandom() {
      const maxNumber = this.$getNumberMax
      return Math.floor(Math.random() * maxNumber + 1)
    },
    /* Función para validar que el número aleatorio no sea 404 */
    $validateNumberRandom(number) {
      if (number === 404) {
        return this.$getNumberRandom()
      } else {
        return number
      }
    }
  }
}

export default GlobalMixin