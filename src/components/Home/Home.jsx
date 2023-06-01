import {
  Section,
  ParallaxEl,
  WrapperContent,
  TitleContent,
  TextContent,
  WrapperText,
} from './Home-styled';
import { hero_img1, bg_img1, safe_img1, reviews_img1 } from 'media';

const Home = () => {
  return (
    <Section>
      <ParallaxEl
        layers={[
          {
            image: `${hero_img1}`,
            expanded: false,
            speed: -35,
            scale: [1, 1.15],
          },
        ]}
      >
        <WrapperContent>
          <WrapperText className="main">
            <TitleContent className="main">
              This is ContactHelper, I can help you with your contacts
            </TitleContent>
            <TextContent>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. In minus
              beatae ratione, vero officia vel perspiciatis accusamus asperiores
              non eos cupiditate officiis maxime cumque delectus est rem
              similique ducimus. Quibusdam.
            </TextContent>
          </WrapperText>
        </WrapperContent>
      </ParallaxEl>
      <ParallaxEl
        layers={[
          {
            image: `${bg_img1}`,
            expanded: false,
            speed: -35,
            scale: [1, 1.15],
          },
        ]}
      >
        <WrapperContent>
          <WrapperText>
            <TitleContent>New opportunities</TitleContent>
            <TextContent>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. In minus
              beatae ratione, vero officia vel perspiciatis accusamus asperiores
              non eos cupiditate officiis maxime cumque delectus est rem
              similique ducimus. Quibusdam.
            </TextContent>
          </WrapperText>
        </WrapperContent>
      </ParallaxEl>
      <ParallaxEl
        layers={[
          {
            image: `${safe_img1}`,
            expanded: false,
            speed: -35,
            scale: [1, 1.15],
          },
        ]}
      >
        <WrapperContent>
          <WrapperText>
            <TitleContent>
              Security of your date is our responsibility
            </TitleContent>
            <TextContent>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. In minus
              beatae ratione, vero officia vel perspiciatis accusamus asperiores
              non eos cupiditate officiis maxime cumque delectus est rem
              similique ducimus. Quibusdam.
            </TextContent>
          </WrapperText>
        </WrapperContent>
      </ParallaxEl>
      <ParallaxEl
        layers={[
          {
            image: `${reviews_img1}`,
            expanded: false,
            speed: -35,
            scale: [1, 1.15],
          },
        ]}
      >
        <WrapperContent>
          <WrapperText>
            <TitleContent>
              We have many reviews that's why you can trust us
            </TitleContent>
            <TextContent>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. In minus
              beatae ratione, vero officia vel perspiciatis accusamus asperiores
              non eos cupiditate officiis maxime cumque delectus est rem
              similique ducimus. Quibusdam.
            </TextContent>
          </WrapperText>
        </WrapperContent>
      </ParallaxEl>
    </Section>
  );
};

export default Home;
