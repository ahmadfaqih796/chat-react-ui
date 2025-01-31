import { Box, Divider, Typography } from "@mui/material";
import React from "react";
import PageHeader from "../../components/widget/PageHeader";

const AiApp = () => {
  return (
    <Box
      sx={(theme) => ({
        height: "100%",
        display: "flex",
        flexDirection: "column",
        // justifyContent: "space-between",
        backgroundColor: theme.palette.background.paper,
        transition: theme.palette.transition,
        borderRadius: "10px",
      })}
    >
      <PageHeader title="Faqih AI" />
      <Divider />
      <Box
        p={2}
        sx={{
          overflowY: "auto",
          scrollbarWidth: "none",
        }}
      >
        <Typography variant="body2" textAlign="justify">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, eos
          facilis minus inventore nisi, ducimus at architecto velit earum
          aliquid a doloremque, dolores ex soluta distinctio optio et dolor.
          Aspernatur. Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Ut doloremque repudiandae architecto quaerat recusandae veritatis
          porro dolores temporibus, molestias culpa? Quae accusamus incidunt at
          atque amet velit repellendus sed pariatur? Lorem ipsum dolor sit, amet
          consectetur adipisicing elit. Dicta error neque minus ex accusamus
          inventore repellat quam commodi labore perspiciatis laudantium, quod
          deleniti a nisi, et nostrum. Eius, molestias magnam. Lorem ipsum dolor
          sit amet consectetur adipisicing elit. Aspernatur obcaecati autem,
          molestiae ad illum similique pariatur suscipit. Corrupti excepturi
          delectus maiores deserunt accusamus dolorem eius tenetur libero illum.
          Libero, culpa. Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Eos, esse ab consequatur ea voluptatem itaque nihil saepe
          recusandae eius eligendi dolorum maiores quis autem doloribus
          inventore enim reprehenderit ex dolore! Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Hic dolores, minus unde possimus
          laboriosam quia numquam doloremque, dicta molestias minima
          consectetur, eveniet modi facere amet voluptate explicabo ad autem
          sunt.
        </Typography>
      </Box>
    </Box>
  );
};

export default AiApp;
