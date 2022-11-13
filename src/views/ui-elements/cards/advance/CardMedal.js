// ** Reactstrap Imports
import { Card, CardBody, CardText, Button } from 'reactstrap'

// ** Images
import medal from '@src/assets/images/illustration/badge.svg'

const CardMedal = () => {
  return (
    <Card className='card-congratulations-medal'>
      <CardBody>
        <h5>Qora mollar soni</h5>
        <CardText className='font-small-3'>Fermangizdagi jami qora mollar soni</CardText>
        <h3 className='mb-75 mt-2 pt-50'>
          <a href='/' style={{"font-size":"2rem"}} onClick={e => e.preventDefault()}>
    13
          </a>
        </h3>
        <Button color='primary'>Sotuvlarni korish</Button>
      </CardBody>
    </Card>
  )
}

export default CardMedal
