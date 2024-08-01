import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const FavoriteIcon = ({color}: {color?: string}) => (
  <Svg
  fill={color}
    data-name="Layer 1"
    viewBox="0 0 24 24"
    height="28"
    width="25"
  >
    <Path
      fill={color}
      d="M13.908 24.003c-.476 0-.951-.155-1.374-.467l-3.036-2.398-3.022 2.389a2.318 2.318 0 0 1-2.747.022 2.283 2.283 0 0 1-.851-2.596l1.049-3.63L.96 15.198c-.842-.616-1.163-1.61-.84-2.597C.443 11.613 1.288 11 2.327 11h3.801l1.159-3.747c.321-.999 1.168-1.616 2.212-1.616s1.892.618 2.21 1.611l1.16 3.751h3.801c1.039 0 1.885.614 2.207 1.601.322.986.002 1.98-.836 2.594l-2.959 2.127 1.042 3.646a2.278 2.278 0 0 1-.856 2.58c-.42.303-.89.454-1.359.454ZM9.498 20c.109 0 .219.036.31.107l3.333 2.634c.472.349 1.054.348 1.543-.003.488-.353.669-.904.484-1.479l-1.144-4a.5.5 0 0 1 .188-.544l3.24-2.33a1.27 1.27 0 0 0 .473-1.474 1.27 1.27 0 0 0-1.256-.912h-4.17a.501.501 0 0 1-.478-.352l-1.268-4.099c-.183-.569-.653-.912-1.257-.912s-1.074.343-1.258.917l-1.266 4.094a.5.5 0 0 1-.478.352H2.327c-.6 0-1.07.341-1.257.912a1.271 1.271 0 0 0 .477 1.477l3.249 2.327a.5.5 0 0 1 .189.545l-1.152 3.984c-.19.589-.009 1.141.48 1.492.474.344 1.084.34 1.556-.006l3.319-2.624a.505.505 0 0 1 .31-.107Zm11.78-12c-.255 0-.51-.082-.731-.245L19.5 6.986l-1.048.77a1.232 1.232 0 0 1-1.453.007 1.216 1.216 0 0 1-.452-1.381l.408-1.262-1.074-.785a1.217 1.217 0 0 1-.446-1.379c.156-.476.579-.955 1.174-.955h1.324l.396-1.152c.163-.511.624-.848 1.172-.848s1.009.336 1.176.857l.392 1.143h1.324c.595 0 1.018.479 1.173.954a1.216 1.216 0 0 1-.443 1.379l-1.076.786.408 1.262a1.216 1.216 0 0 1-.453 1.381c-.22.158-.471.237-.722.237ZM19.5 5.865c.104 0 .208.032.296.097l1.344.987c.092.067.185.067.276.001.092-.066.121-.154.086-.261l-.52-1.607a.5.5 0 0 1 .181-.558l1.367-.999c.091-.066.119-.154.084-.262-.052-.158-.169-.264-.223-.264h-1.682a.5.5 0 0 1-.473-.338l-.511-1.49c-.076-.234-.381-.225-.449-.01l-.515 1.5a.5.5 0 0 1-.473.338h-1.682c-.054 0-.171.106-.224.265-.034.106-.006.194.086.261l1.366.999a.5.5 0 0 1 .181.558l-.52 1.606a.215.215 0 0 0 .086.262c.088.063.193.06.275 0l1.345-.988a.497.497 0 0 1 .296-.097Z"
      data-original-color="#000000ff"
    />
  </Svg>
)
export default FavoriteIcon