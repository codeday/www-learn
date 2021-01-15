import React, { forwardRef } from 'react';
import { useDisclosure, FormControl, FormLabel, Input } from '@chakra-ui/core'
import { Modal, ModalOverlay, ModalBody, ModalContent, ModalHeader, ModalFooter, ModalCloseButton } from '@chakra-ui/core'
import { RadioButtonGroup, RadioGroup, Radio} from '@chakra-ui/core'
import { Stack, HStack, VStack, Select } from "@chakra-ui/react"
import Button from '@codeday/topo/Atom/Button';


export default function QuizModal() {
  const { isOpen, onOpen, onClose } = useDisclosure()

  const initialRef = React.useRef()

  return (
    <>
      <Button onClick={onOpen}>Take Quiz</Button>

      <Modal
        initialFocusRef={initialRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader></ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl >
              <FormLabel as="legend">What are you thinking about building?</FormLabel>
              <RadioGroup defaultValue="A Game">
                <VStack align="stretch" spacing="24px">
                  <Radio value="game">A Game</Radio>
                  <Radio value="bot">A Bot</Radio>
                  <Radio value="website">A Website</Radio>
                  <Radio value="general">General Programming</Radio>
                </VStack>
              </RadioGroup>

              <FormLabel mt={2}>Which programming language were you thinking of using?</FormLabel>
              <Select mt={2} placeholder="Python">
                <option>Java</option>
                <option>Lua</option>
                <option>Go</option>
                <option>Scala</option>
                <option>JavaScript</option>
                <option>TypeScript</option>
                <option>C++</option>
                <option>C#</option>
                <option>Swift</option>
                <option>Kotlin</option>
                <option>Not sure honestly</option>
              </Select>
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button onClick={onClose}>Next</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}