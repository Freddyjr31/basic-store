import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'

export default function Items (props) {
  return <li className='text-start m-1'>{props.value}</li>
}
