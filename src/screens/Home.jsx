import { Button, Stack, Text, VerticalSpace } from "@create-figma-plugin/ui"
import styles from "../styles.css"
import { h } from "preact"

export const Home = ({ handleStartClick }) => {
  return (
    <div className={styles["home"]}>
      <div className={styles["home-wrapper"]}>
        <div className={styles["home-illustration"]}>
          <Illustration />
        </div>
        <div className={styles["home-title"]}>Deel Design Linter</div>
        <div className={styles["home-description"]}>
          Select a layer to get started
        </div>
        <Button
          fullWidth
          onClick={handleStartClick}
        >
          Run Linter
        </Button>
      </div>
    </div>
  )
}

const Illustration = () => {
  return (
    <svg
      width='280'
      height='280'
      viewBox='0 0 280 280'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      xmlns:xlink='http://www.w3.org/1999/xlink'
    >
      <rect
        width='280'
        height='280'
        rx='12'
        fill='#DBEEFF'
      />
      <path
        d='M208.398 96.9851C212.725 134.56 185.434 167.829 147.683 172.177C109.931 176.525 76.0137 150.305 71.6863 112.729C67.359 75.1541 94.4548 41.1689 132.207 36.8212C169.958 32.4735 204.07 59.4098 208.398 96.9851Z'
        fill='#00499D'
      />
      <path
        d='M154.453 246.65L143.314 172.94L159.943 168.493L178.629 243.899L154.453 246.65Z'
        fill='#C7E2FE'
      />
      <path
        d='M162.614 179.23L146.264 192.657L143.014 171.663L160.161 169.344L162.614 179.23Z'
        fill='#00499D'
      />
      <mask
        id='mask0_564_4235'
        style='mask-type:alpha'
        maskUnits='userSpaceOnUse'
        x='142'
        y='168'
        width='21'
        height='25'
      >
        <path
          d='M162.618 179.238L146.248 192.623L142.987 170.96L160.031 168.726L162.618 179.238Z'
          fill='#DBEEFF'
        />
      </mask>
      <g mask='url(#mask0_564_4235)'>
        <mask
          id='mask1_564_4235'
          style='mask-type:alpha'
          maskUnits='userSpaceOnUse'
          x='-83'
          y='137'
          width='428'
          height='330'
        >
          <rect
            x='-82.8571'
            y='137.972'
            width='426.976'
            height='328.046'
            fill='url(#pattern0)'
          />
        </mask>
        <g mask='url(#mask1_564_4235)'>
          <rect
            x='-82.8571'
            y='137.972'
            width='426.976'
            height='328.046'
            fill='#DBEEFF'
          />
        </g>
      </g>
      <ellipse
        cx='143.703'
        cy='103.768'
        rx='67.9938'
        ry='70.2432'
        fill='#C7E2FE'
      />
      <path
        d='M200.081 103.768C200.081 136.146 174.822 162.361 143.703 162.361C112.584 162.361 87.3263 136.146 87.3263 103.768C87.3263 71.3906 112.584 45.1753 143.703 45.1753C174.822 45.1753 200.081 71.3906 200.081 103.768Z'
        fill='#FAF4EE'
        stroke='#00499D'
        stroke-width='0.964413'
      />
      <path
        fill-rule='evenodd'
        clip-rule='evenodd'
        d='M161.885 159.759C184.371 151.88 200.563 129.788 200.563 103.768C200.563 71.1419 175.106 44.6931 143.703 44.6931C134.528 44.6931 125.859 46.9514 118.185 50.9622C123.894 48.9619 130.008 47.8777 136.367 47.8777C167.769 47.8777 193.226 74.3264 193.226 106.953C193.226 130.045 180.473 150.043 161.885 159.759Z'
        fill='#00499D'
      />
      <mask
        id='mask2_564_4235'
        style='mask-type:alpha'
        maskUnits='userSpaceOnUse'
        x='109'
        y='47'
        width='90'
        height='101'
      >
        <path
          d='M173.009 87.4059C157.982 57.272 123.674 56.6806 109.409 57.7018C132.146 39.9301 157.579 48.6038 167.453 55.162C190.8 68.5826 197.551 94.9873 198.007 106.512C198.007 126.97 185.95 142.397 179.921 147.553C184.228 137.818 188.942 119.358 173.009 87.4059Z'
          fill='#D9D9D9'
        />
      </mask>
      <g mask='url(#mask2_564_4235)'>
        <mask
          id='mask3_564_4235'
          style='mask-type:alpha'
          maskUnits='userSpaceOnUse'
          x='-153'
          y='18'
          width='498'
          height='383'
        >
          <rect
            x='-152.36'
            y='18.4685'
            width='496.779'
            height='381.675'
            fill='url(#pattern1)'
          />
        </mask>
        <g mask='url(#mask3_564_4235)'>
          <rect
            x='-152.36'
            y='18.4685'
            width='496.779'
            height='381.675'
            fill='#00499D'
          />
        </g>
      </g>
      <ellipse
        cx='166.569'
        cy='245.651'
        rx='11.3164'
        ry='4.29714'
        transform='rotate(-5.69996 166.569 245.651)'
        fill='#00499D'
        stroke='#00499D'
        stroke-width='1.70572'
      />
      <path
        d='M199.813 103.768C199.813 136.007 174.665 162.093 143.703 162.093C112.742 162.093 87.5941 136.007 87.5941 103.768C87.5941 71.5288 112.742 45.4431 143.703 45.4431C174.665 45.4431 199.813 71.5288 199.813 103.768Z'
        stroke='#00499D'
        stroke-width='1.5'
      />
      <defs>
        <pattern
          id='pattern0'
          patternContentUnits='objectBoundingBox'
          width='0.935414'
          height='1.21751'
        >
          <use
            xlink:href='#image0_564_4235'
            transform='scale(0.000456745 0.000594489)'
          />
        </pattern>
        <pattern
          id='pattern1'
          patternContentUnits='objectBoundingBox'
          width='0.935414'
          height='1.21751'
        >
          <use
            xlink:href='#image0_564_4235'
            transform='scale(0.000456745 0.000594488)'
          />
        </pattern>
        <image
          id='image0_564_4235'
          width='2048'
          height='2048'
        />
      </defs>
    </svg>
  )
}