import {
  Box,
  CloseButton,
  Flex,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  Stack,
  Text,
  useDisclosure,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import ChevronDownIcon from '../icons/ChevronDownIcon';
import Image from 'next/image';

interface ICustomSelect {
  id: string;
  title: string;
  flag?: string;
}

const CustomSelect = ({
  data,
  onSelect,
  label,
  placeholder,
}: {
  data?: ICustomSelect[];
  label: string;
  placeholder: string;
  onSelect: (val: string) => void;
}) => {
  const { onOpen, isOpen, onClose, onToggle } = useDisclosure();
  const [search, setSearch] = useState('');
  const [selectedText, setSelectedText] = useState<string | undefined>();
  return (
    <>
      <Box
        bg={'shade.black'}
        border={'1px solid '}
        borderColor={'grey.600'}
        rounded={'0.375rem'}
        display={'flex'}
        justifyContent={'space-between'}
        padding={'1rem'}
        height={'3.5rem'}
        alignItems={'center'}
        onClick={onOpen}
      >
        <Text color={'shade.white'}>{selectedText || placeholder}</Text>
        <ChevronDownIcon />
      </Box>
      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalContent padding={0} background={'transparent'}>
          <ModalBody padding={'1rem'} position={'relative'}>
            <Box
              bg={'shade.black'}
              border={'1px solid'}
              borderColor={'grey.600'}
              boxShadow={
                '0px 10px 15px -3px rgba(0, 0, 0, 0.10), 0px 4px 6px -2px rgba(0, 0, 0, 0.05)'
              }
              rounded={'0.5rem'}
              display={'flex'}
              flexDir={'column'}
              padding={'1rem'}
              width={'100%'}
              height={'95vh'}
              overflowY={'scroll'}
              alignItems={'center'}
              position={'relative'}
            >
              <Stack
                position={'fixed'}
                left={0}
                mt={-4}
                ml={7}
                bg={'shade.black'}
                minW={'21rem'}
                zIndex={'40'}
              >
                <Flex alignItems={'center'}>
                  <Text
                    color={'shade.white'}
                    textAlign={'left'}
                    w={'full'}
                    py={'0.5rem'}
                  >
                    {label}
                  </Text>
                  <CloseButton
                    onClick={onClose}
                    size={'sm'}
                    color={'shade.white'}
                  />
                </Flex>
                <Input
                  bg={'shade.black'}
                  border={'1px solid'}
                  borderColor={'grey.600'}
                  rounded={'0.375rem'}
                  display={'flex'}
                  color={'shade.white'}
                  justifyContent={'space-between'}
                  padding={'0.5rem 0.75rem'}
                  height={'2.25rem'}
                  alignItems={'center'}
                  autoFocus
                  placeholder="Search country"
                  onChange={({ target: { value } }) => {
                    setSearch(value);
                  }}
                />
              </Stack>

              <Stack w={'full'} mt={'4.5rem'}>
                {data
                  ?.filter((i) =>
                    i.title.toLowerCase().includes(search.toLowerCase())
                  )
                  .map((item) => (
                    <Flex
                      key={item?.id}
                      w={'full'}
                      py={'0.5rem'}
                      gap={'0.75rem'}
                      onClick={() => {
                        onClose();
                        setSelectedText(item?.title);
                        onSelect(item.title);
                      }}
                    >
                      {item?.flag && (
                        <Box
                          width={'1.25rem'}
                          height={'1.25rem'}
                          position={'relative'}
                        >
                          <Image
                            alt={''}
                            fill
                            style={{ objectFit: 'cover', borderRadius: '50%' }}
                            src={item?.flag as string}
                          />
                        </Box>
                      )}
                      <Text
                        color={'shade.white'}
                        fontSize={'0.875rem'}
                        lineHeight={'145%'}
                        fontWeight={400}
                        fontStyle={'normal'}
                      >
                        {item?.title}
                      </Text>
                    </Flex>
                  ))}
              </Stack>
            </Box>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default CustomSelect;
