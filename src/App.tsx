import {
  Alert,
  Button,
  Checkbox,
  Container,
  Flex,
  Heading,
  Image,
  Text,
  VStack,
} from '@chakra-ui/react';
import ContentStyle from './style/Content';
import { useState, ChangeEvent, useEffect } from 'react';
import { generatePassword } from './service';
import Slider from './Slider';
import { ArrowForwardIcon } from '@chakra-ui/icons';

function App() {
  const [password, setPassword] = useState('password123');
  const [copied, setCopied] = useState(false);
  const [options, setOptions] = useState({
    uppercase: true,
    lowercase: true,
    symbols: true,
    numbers: true,
  });
  const [length, setLength] = useState(8);
  const [passwordStrength, setPasswordStrength] = useState('STRONG');

  const changeOption = (name: string, value: boolean) => {
    setOptions(prevState => {
      // const newState = { ...prevState }
      // newState[name] = value
      // return newState

      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  // Function to calculate password strength
  const calcPasswordStrength = (
    length: number,
    checkboxCount: number
  ): string => {
    if (length < 8 || checkboxCount <= 1) {
      return 'TOO WEAK!';
    } else if (length >= 8 && checkboxCount === 2) {
      return 'WEAK';
    } else if (length >= 8 && checkboxCount === 3) {
      return 'MEDIUM';
    } else if (length >= 8 && checkboxCount === 4) {
      return 'STRONG';
    }
    return '';
  };

  const handleClick = () => {
    const password = generatePassword({
      uppercase: options.uppercase,
      symbols: options.symbols,
      lowercase: options.lowercase,
      length,
      numbers: options.numbers,
    });
    setCopied(false);
    setPassword(password);
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    changeOption(event.target.name, event.target.checked);
  };

  const handleCopyClick = () => {
    setCopied(true);
    return navigator.clipboard.writeText(password);
  };

  const handleLengthSlider = (values: number[]) => {
    const [value] = values;
    setLength(value);
  };

  useEffect(() => {
    const count = Object.values(options).filter(value => value).length;
    const strength = calcPasswordStrength(length, count);
    setPasswordStrength(strength);
  }, [options, length]);

  return (
    <Container maxW="md" color="#e6e5ea" my="4rem">
      <Heading
        color="#817D92"
        fontSize="24px"
        fontWeight="bold"
        textAlign="center"
      >
        Password Generator
      </Heading>
      <ContentStyle color="#e6e5ea" fontSize="28px">
        <Flex align="center" justify="space-between">
          <Text>{password}</Text>
          <Flex align="center" justify="space-between">
            {copied ? (
              <Text fontSize="16px" color="#a4ffaf">
                COPIED
              </Text>
            ) : null}
            <Image
              src="/assets/icon-copy.svg"
              _hover={{ cursor: 'pointer' }}
              onClick={handleCopyClick}
              ml={3}
            />
          </Flex>
        </Flex>
      </ContentStyle>
      <ContentStyle py="50px">
        <Flex align="center" justify="space-between">
          <Text>Character Length</Text>
          <Text fontSize="24px" color="#a4ffaf">
            {length}
          </Text>
        </Flex>
        <Slider values={[length]} onChange={handleLengthSlider} />
        <VStack align="start" mb="20px">
          <Checkbox
            isChecked={options.uppercase}
            name="uppercase"
            onChange={handleChange}
          >
            Include Uppercase Letters
          </Checkbox>
          <Checkbox
            isChecked={options.lowercase}
            name="lowercase"
            onChange={handleChange}
          >
            Include Lowercase Letters
          </Checkbox>
          <Checkbox
            isChecked={options.symbols}
            name="symbols"
            onChange={handleChange}
          >
            Include Symbols
          </Checkbox>
          <Checkbox
            isChecked={options.numbers}
            name="numbers"
            onChange={handleChange}
          >
            Include Numbers
          </Checkbox>
          <Alert bg="#18171f" display="flex" justifyContent="space-between">
            <Text>Strength</Text>
            <Text color="#a4ffaf">{passwordStrength}</Text>
          </Alert>
        </VStack>

        <Button
          onClick={handleClick}
          bg="#A4FFAF"
          color="black"
          borderRadius="none"
          w="full"
          _hover={{
            bg: '#24232c',
            color: '#A4FFAF',
            border: '2px solid #A4ffaf',
          }}
          rightIcon={<ArrowForwardIcon />}
        >
          GENERATE
        </Button>
      </ContentStyle>
    </Container>
  );
}

export default App;
