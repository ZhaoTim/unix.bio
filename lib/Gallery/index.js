import React from 'react';
import {
  Drawer,
  Button,
  Divider,
  Spacer,
  Toggle,
  Text,
  Image,
  Display,
  Grid
} from '@geist-ui/core'
import { Image as ImageIcon } from '@geist-ui/icons'

const Gallery = () => {
  const [visible, setVisible] = React.useState(false);

  const toggle = () => setVisible(_ => !_);
  return (
    <>
      <Drawer
        // style={{ width: "300px" }}
        onClose={() => setVisible(false)}
        visible={visible} placement="right">
        <Drawer.Title>🌸 关于春天的影像 🌸</Drawer.Title>
        <Drawer.Content>
          <Display shadow caption="老大爷 - 永恒的主题">
            <Image width="300px" src="https://static.zhaomeicheng.com/yeye.jpeg" />
          </Display>
          <Display shadow caption="公司楼下">
            <Image width="300px" src="https://static.zhaomeicheng.com/under_company.jpeg" />
          </Display>
        </Drawer.Content>
      </Drawer>
      <Spacer h={2} />
      <Grid.Container justify="center">
        <Button icon={<ImageIcon />} onClick={toggle} ghost auto>🌸 关于春天的影像 🌸</Button>
      </Grid.Container>
    </>
  )
}

export default Gallery;
