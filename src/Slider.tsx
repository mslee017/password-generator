import {
  RangeSlider,
  RangeSliderTrack,
  RangeSliderFilledTrack,
  RangeSliderThumb,
} from '@chakra-ui/react';

export default function Slider({
  values,
  onChange,
}: {
  values: number[];
  onChange: (values: number[]) => void;
}) {
  return (
    <RangeSlider
      aria-label={['length']}
      value={values}
      onChange={onChange}
      max={20}
    >
      <RangeSliderTrack bg="#18171f">
        <RangeSliderFilledTrack bg="#a4ffaf" />
      </RangeSliderTrack>
      <RangeSliderThumb index={0} boxSize={6} />
    </RangeSlider>
  );
}
