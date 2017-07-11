import React, { Component } from 'react'
import {Container, Header, Icon, Button} from 'semantic-ui-react'

import C from './../../../../components/Colors'
import SlideUp from './../../../../components/Animations/SlideUp'
import ClickEffect from './../../../../components/Animations/ClickEffect'
class Body extends Component {

  render () {
    return (
      <Container textAlign='center'>
        <Header as='h2' icon>
          <Icon style={{color: C.green2}} name='student' />
          <span style={{color: C.green3}}>Sistema de Evaluaci&oacute;n Docente</span>
          <br />
          <Header.Subheader>
            <span>
              <br />
              Evaluación docente... por que los estudiantes también debemos calificar.
            </span>
          </Header.Subheader>
        </Header>
        <Container textAlign='center'>
          <br />
          <ClickEffect>
            <Button color='teal' size='huge'>
              Iniciar
              <Icon name='angle double right' />
            </Button>
          </ClickEffect>
        </Container>
      </Container>
    )
  }

}
export default SlideUp(Body)
