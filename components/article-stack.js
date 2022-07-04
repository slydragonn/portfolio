import { Badge, Stack } from "@chakra-ui/react"

const ArticleStack = ({ stack }) => {
  return (
    <Stack direction="row" m="20px 0 30px 0">
      {
        stack.map(item => (
        <Badge
          key={item}
          variant="outline"
          colorScheme="green"
        >
          {item}
        </Badge>
        ))
      }
    </Stack>
  )
}

export default ArticleStack