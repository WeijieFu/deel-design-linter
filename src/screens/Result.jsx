import {
  Button,
  Columns,
  Container,
  Muted,
  render,
  Stack,
  Text,
  Tabs,
  TextboxNumeric,
  VerticalSpace,
  SegmentedControl,
  IconLayerFrame16,
  IconLayerInstance16,
  IconLayerGroup16,
  IconLayerComponent16,
  IconTarget16,
  IconSwap32,
} from "@create-figma-plugin/ui"
import { emit } from "@create-figma-plugin/utilities"
import { h } from "preact"
import { useCallback, useEffect, useState, useRef } from "preact/hooks"
import { Filter } from "../components/filter"
import styles from "../styles.css"

export const Result = ({ result }) => {
  // useEffect(() => {
  //   console.log(result)
  // }, [])
  const [isSuccess, setIsSuccess] = useState(true)
  const convertResultToFilter = (array, result) => {
    const initialValue = {}
    let tempIsSuccess = true
    array.map((item) => {
      initialValue[item] = {
        value: item,
        active: result[item].length > 0,
      }
      tempIsSuccess = tempIsSuccess && result[item].length == 0
    })
    setIsSuccess(tempIsSuccess)
    return initialValue
  }

  const [filter, setFilter] = useState(
    convertResultToFilter(Object.keys(result), result)
  )
  const handleLintAgainClick = () => {
    emit("START")
  }

  return (
    <Stack>
      <Filter
        filter={filter}
        setFilter={setFilter}
        result={result}
      />
      {isSuccess && (
        <div className={styles["success-wrapper"]}>
          <div className={styles["success"]}>
            <Success />
            <div className={styles["home-title"]}>Good job, Maestro!</div>
          </div>
        </div>
      )}
      <div className={styles["results"]}>
        {Object.keys(result)
          .filter((item) => {
            return filter[item].active
          })
          .map((criteria, index) => {
            return result[criteria].map((item, index) => {
              return <ResultItem item={item} />
            })
          })}
      </div>

      <div
        className={styles["run-again-button"]}
        onClick={handleLintAgainClick}
      >
        <IconSwap32 />
      </div>
    </Stack>
  )
}

const ResultItem = ({ item }) => {
  const handleTargetClick = () => {
    emit("SELECT_TARGET", item.node.id)
  }
  return (
    <div
      className={styles["result-item"]}
      onClick={handleTargetClick}
    >
      <div className={styles["result-left"]}>
        {item.node.type === "FRAME" && <IconLayerFrame16 />}
        {item.node.type === "INSTANCE" && <IconLayerInstance16 />}
        {item.node.type === "GROUP" && <IconLayerGroup16 />}
        {item.node.type === "COMPONENT" && <IconLayerComponent16 />}
      </div>
      <div className={styles["result-right"]}>
        <div className={styles["result-name"]}>{item.node.name}</div>
        <div className={styles["result-message"]}>{item.message}</div>
      </div>
      <IconTarget16 />
    </div>
  )
}

const Success = () => {
  return (
    <svg
      width='128'
      height='128'
      viewBox='0 0 128 128'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <g clip-path='url(#clip0_1_1075)'>
        <path
          d='M61.7637 12.5933C26.706 13.8357 -0.70873 43.2935 0.535223 78.3935L0.561742 78.3926C0.555956 78.7288 0.55911 79.0675 0.571183 79.4082C1.33319 100.909 37.4774 113.663 74.3409 112.357C111.203 111.05 128.293 96.41 127.531 74.9087C127.519 74.568 127.502 74.2298 127.482 73.8945L127.495 73.894C126.252 38.7981 96.8202 11.3509 61.7637 12.5933Z'
          fill='#C2EEB5'
        />
        <path
          d='M124.89 27.6818C123.67 38.7625 112.656 46.6415 100.291 45.28C87.9254 43.9185 78.8903 33.832 80.1104 22.7512C81.3305 11.6704 92.3437 3.79143 104.709 5.15297C117.075 6.51451 126.11 16.601 124.89 27.6818Z'
          fill='#29811E'
        />
        <path
          d='M90.0108 26.4897C90.0108 26.4897 94.4675 22.1624 94.5485 21.9192C94.6296 21.6759 100.144 29.7688 100.144 29.7688L110.411 13.1649L114.988 16.9965L101.028 38.1426L90.0108 26.4917V26.4897Z'
          fill='white'
        />
        <path
          d='M85.0658 42.4562C95.689 50.9681 96.6005 67.4786 87.1018 79.3333C77.6031 91.1881 61.2911 93.898 50.6679 85.3862C40.0448 76.8743 39.1333 60.3639 48.632 48.5091C58.1307 36.6543 74.4427 33.9444 85.0658 42.4562Z'
          fill='#5938B7'
        />
        <path
          d='M81.1628 41.4274C91.786 49.9393 92.6975 66.4497 83.1988 78.3044C73.7 90.1592 57.388 92.8692 46.7649 84.3573C36.1418 75.8454 35.2302 59.335 44.7289 47.4802C54.2277 35.6255 70.5397 32.9155 81.1628 41.4274Z'
          fill='white'
        />
        <path
          fill-rule='evenodd'
          clip-rule='evenodd'
          d='M50.3447 49.7401C47.8898 52.804 45.8091 56.9946 45.3127 60.5241C44.2388 68.161 46.1466 75.6104 52.0334 80.3272C60.6409 87.2241 71.9282 84.7502 79.6951 75.0567C87.462 65.3633 86.6759 51.9287 78.0684 45.0319C69.461 38.1351 58.1117 40.0467 50.3447 49.7401ZM49.5376 80.6395C40.5227 73.4162 39.7967 59.4621 47.7869 49.4901C55.7771 39.518 69.5537 37.1843 78.5687 44.4076C87.5836 51.6309 88.3096 65.5849 80.3194 75.557C72.3292 85.5291 58.5526 87.8627 49.5376 80.6395Z'
          fill='#5938B7'
        />
        <path
          d='M61.0238 74.6178L61.5001 72.2914L62.292 72.3116L63.1614 72.2882L63.764 69.0111L62.8583 69.0623L62.0703 69.0208L63.1889 62.8442L65.4126 50.7521L65.8492 48.3778H67.5584L67.1245 50.7369L64.8175 63.2826L62.733 74.6178H61.0238ZM69.235 56.7725C69.3023 55.8774 69.0206 55.1804 68.3897 54.6815C67.7658 54.1827 66.8807 53.9333 65.7343 53.9333C64.9283 53.9333 64.215 54.0529 63.5943 54.292C62.9737 54.5312 62.4728 54.8558 62.0917 55.2658C61.7106 55.6758 61.4682 56.1439 61.3645 56.67C61.284 57.1074 61.315 57.4866 61.4575 57.8078C61.6068 58.129 61.838 58.4023 62.1508 58.6278C62.465 58.8465 62.8236 59.031 63.2267 59.1813C63.6299 59.3316 64.0409 59.4581 64.4597 59.5606L66.3703 60.0526C67.1423 60.2371 67.8711 60.4865 68.5567 60.8008C69.2493 61.1151 69.8469 61.5115 70.3495 61.9898C70.8591 62.4681 71.2253 63.0456 71.4483 63.7221C71.6713 64.3986 71.6993 65.1912 71.5321 66.1001C71.3059 67.3301 70.7872 68.4132 69.9758 69.3493C69.1657 70.2787 68.1078 71.0064 66.8021 71.5326C65.5046 72.0519 64.0012 72.3116 62.292 72.3116C60.6315 72.3116 59.2363 72.0588 58.1064 71.5531C56.9835 71.0474 56.1674 70.3094 55.658 69.3391C55.1555 68.3687 55.0047 67.1866 55.2054 65.7926H59.0094C58.9306 66.5237 59.048 67.1319 59.3618 67.6171C59.6755 68.1022 60.1335 68.4644 60.7357 68.7036C61.3448 68.9427 62.0523 69.0623 62.8583 69.0623C63.699 69.0623 64.4581 68.9393 65.1356 68.6933C65.8213 68.4405 66.3857 68.092 66.8286 67.6478C67.2729 67.1968 67.5537 66.6707 67.6713 66.0693C67.7648 65.5227 67.6845 65.0717 67.4302 64.7163C67.1772 64.3541 66.7844 64.0535 66.2517 63.8143C65.8374 63.62 65.3594 63.4428 64.8175 63.2826C64.856 63.0729 65.4211 60 65.4548 59.8168L63.825 59.3851L63.1889 62.8442L62.0561 62.5433C60.38 62.0991 59.1142 61.4261 58.2587 60.5241C57.4114 59.6152 57.126 58.4091 57.4025 56.9058C57.6299 55.669 58.1695 54.5859 59.0213 53.6565C59.8801 52.7272 60.9472 52.0063 62.2225 51.4938C63.2197 51.0882 64.283 50.841 65.4126 50.7521L64.8171 53.99C64.8171 53.99 65.297 53.9366 65.7343 53.9333C66.0871 53.9307 66.3959 53.978 66.5285 53.978L67.1245 50.7369C68.3177 50.8098 69.3483 51.062 70.2161 51.4938C71.2683 52.0063 72.0368 52.7204 72.5215 53.636C73.0074 54.5449 73.1522 55.5904 72.9556 56.7725H69.235Z'
          fill='#5938B7'
        />
        <path
          fill-rule='evenodd'
          clip-rule='evenodd'
          d='M-1.62402 108.355L36.3576 80.0899L36.8352 80.7317L-1.14642 108.997L-1.62402 108.355ZM17.3406 108.376L40.3061 88.0605L40.8362 88.6597L17.8706 108.975L17.3406 108.376Z'
          fill='#A98DF6'
        />
      </g>
      <defs>
        <clipPath id='clip0_1_1075'>
          <rect
            width='128'
            height='128'
            fill='white'
          />
        </clipPath>
      </defs>
    </svg>
  )
}
