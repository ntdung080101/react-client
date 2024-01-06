import { AspectRatio, Box } from '@chakra-ui/react';
import Footer from '../component/HomeComponent/Footer';

const MapPage = () => {
  return (
    <Box>
      <AspectRatio ratio={16 / 9}>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d245367.87556278717!2d107.91331312000317!3d16.07207593094691!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x314219c792252a13%3A0x1df0cb4b86727e06!2zxJDDoCBO4bq1bmcsIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1703758958590!5m2!1svi!2s" />
      </AspectRatio>
      <Footer></Footer>
    </Box>
  );
};

export default MapPage;
