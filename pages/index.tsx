import { Fragment } from 'react'
import {
  FlexContainer,
  Heading,
  Link,
  List,
  ListItem,
  Subtitle,
  Title,
} from '../components'
import { getHomeContent } from '../helpers'
import { useWindowHeight } from '../hooks'

interface HomeProps {
  title: string
  subtitle: string
  services: [{ heading: string; serviceList: string[] }]
  email: string
}

const Home = ({ title, subtitle, services, email }: HomeProps) => {
  const height = useWindowHeight()

  return (
    <FlexContainer height={height}>
      <Title>{title}</Title>
      <Subtitle>{subtitle}</Subtitle>
      {services.map(({ heading, serviceList }) => (
        <Fragment key={heading}>
          <Heading>{heading}</Heading>
          <List>
            {serviceList.map(service => (
              <ListItem key={service}>{service}</ListItem>
            ))}
          </List>
        </Fragment>
      ))}
      <Link href={`mailto:${email}`}>hello@wpx.limited</Link>
    </FlexContainer>
  )
}

Home.getInitialProps = async () => {
  const homeContent = await getHomeContent()
  return homeContent
}

export default Home
