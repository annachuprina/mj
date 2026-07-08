import { useEffect, useMemo, useState } from 'react'
import './App.css'

const PRIORITY_PRELOAD_COUNT = 8

const galleryItems = [
  {
    style: '--sref 7440192674',
    src: `${import.meta.env.BASE_URL}images/1.png`,
    alt: 'MIDJOURNEY STYLE 1',
    prompt: '',
  },
  {
    style: '--sref 7476978753',
    src: `${import.meta.env.BASE_URL}images/2.png`,
    alt: 'Dog holding a leaf',
    prompt: 'Dog holding a leaf',
  },
  {
    style: '--sref 6213523175',
    src: `${import.meta.env.BASE_URL}images/3.png`,
    alt: 'Garden',
    prompt: 'Garden',
  },
  {
    style: '--sref 5648081772',
    src: `${import.meta.env.BASE_URL}images/8.png`,
    alt: 'Woman is sitting on a branch',
    prompt: 'Woman is sitting on a branch',
  },
  {
    style: '--sref 7268283103',
    src: `${import.meta.env.BASE_URL}images/5.png`,
    alt: 'Bird',
    prompt: 'Bird',
  },
  {
    style: '--sref 7268283103',
    src: `${import.meta.env.BASE_URL}images/6.png`,
    alt: 'Sunrise',
    prompt: 'Person is viewing sunrise',
  },
  {
    style: '--sref 6609586403',
    src: `${import.meta.env.BASE_URL}images/7.png`,
    alt: 'Woman portrait',
    prompt: 'Woman portrait',
  },
  {
    style: '--sref 6535417993',
    src: `${import.meta.env.BASE_URL}images/9.png`,
    alt: 'Statue',
    prompt: 'Statue',
  },
  {
    style: '--sref 7762567854',
    src: `${import.meta.env.BASE_URL}images/10.png`,
    alt: 'Picnic',
    prompt: 'Picnic',
  },
  {
    style: '--sref 5666189692',
    src: `${import.meta.env.BASE_URL}images/11.png`,
    alt: 'Balancing stones',
    prompt: 'Balancing stones',
  },
  {
    style: '--sref 7827189344',
    src: `${import.meta.env.BASE_URL}images/12.png`,
    alt: 'Lake in a forest',
    prompt: 'Lake in a forest',
  },
  {
    style: '--sref 7790286388',
    src: `${import.meta.env.BASE_URL}images/13.png`,
    alt: 'Snail carying small snail',
    prompt: 'Snail carying small snail',
  },
  {
    style: '--sref 4379256578',
    src: `${import.meta.env.BASE_URL}images/14.png`,
    alt: 'Bridge',
    prompt: 'Bridge',
  },
  {
    style: '--sref 5742545310',
    src: `${import.meta.env.BASE_URL}images/15.png`,
    alt: 'Northen lights',
    prompt: 'Northen lights',
  },
  {
    style: '--sref 5988056550',
    src: `${import.meta.env.BASE_URL}images/16.png`,
    alt: 'Vase with flower',
    prompt: 'Vase with flower',
  },
  {
    style: '--sref 7366854016 7268283103',
    src: `${import.meta.env.BASE_URL}images/17.png`,
    alt: 'Flower crown',
    prompt: 'Flower crown',
  },
  {
    style: '--sref 7198770506',
    src: `${import.meta.env.BASE_URL}images/18.png`,
    alt: 'Magic',
    prompt: 'Magic',
  },
  {
    style: '--sref 6232303497',
    src: `${import.meta.env.BASE_URL}images/19.png`,
    alt: 'MIDJOURNEY STYLE 19',
    prompt: '',
  },
  {
    style: '--sref 8161832504 5666189692 7790286388',
    src: `${import.meta.env.BASE_URL}images/20.png`,
    alt: 'MIDJOURNEY STYLE 20',
    prompt: 'Loaf of bread',
  },
  {
    style: '--sref 7936152627',
    src: `${import.meta.env.BASE_URL}images/21.png`,
    alt: 'Cat in the flower field',
    prompt: 'Cat in the flower field',
  },
  {
    style: '--sref 7957040092',
    src: `${import.meta.env.BASE_URL}images/22.png`,
    alt: 'Butterflies',
    prompt: 'Butterflies',
  },
  {
    style: '--sref 6771827822',
    src: `${import.meta.env.BASE_URL}images/23.png`,
    alt: 'Greek myths',
    prompt: 'Greek myths',
  },
  {
    style: '--sref 5397164518',
    src: `${import.meta.env.BASE_URL}images/24.png`,
    alt: 'Fantastic chreature',
    prompt: 'Fantastic chreature',
  },
  {
    style: '--sref 7356350689',
    src: `${import.meta.env.BASE_URL}images/25.png`,
    alt: 'Glass pomegranate',
    prompt: 'Glass pomegranate',
  },
  {
    style: '--sref 6005291080',
    src: `${import.meta.env.BASE_URL}images/26.png`,
    alt: 'Bloom',
    prompt: 'Bloom',
  },
  {
    style: '--sref 7791583285',
    src: `${import.meta.env.BASE_URL}images/27.png`,
    alt: 'Landscape',
    prompt: 'Landscape',
  },
  {
    style: '--sref 5302701543',
    src: `${import.meta.env.BASE_URL}images/28.png`,
    alt: 'Portrait',
    prompt: 'Portrait',
  },
  {
    style: '--sref 5664801964',
    src: `${import.meta.env.BASE_URL}images/29.png`,
    alt: 'Bar',
    prompt: 'Bar',
  },
  {
    style: '--sref 5302701543',
    src: `${import.meta.env.BASE_URL}images/30.png`,
    alt: 'Cocktail',
    prompt: 'Cocktail',
  },
  {
    style: '--sref 6937524997',
    src: `${import.meta.env.BASE_URL}images/31.png`,
    alt: 'Library',
    prompt: 'Library',
  },
  {
    style: '--sref 6937524997',
    src: `${import.meta.env.BASE_URL}images/32.1.png`,
    alt: 'Classic art',
    prompt: 'Classic art',
  },
  {
    style: '--sref 6545273707',
    src: `${import.meta.env.BASE_URL}images/33.png`,
    alt: 'Peace',
    prompt: 'Peace',
  },
  {
    style: '--sref 4441123909',
    src: `${import.meta.env.BASE_URL}images/34.png`,
    alt: 'Stockholm',
    prompt: 'Stockholm',
  },
  {
    style: '--sref 7339699678',
    src: `${import.meta.env.BASE_URL}images/35.png`,
    alt: 'People',
    prompt: 'People',
  },
  {
    style: '--sref 6979214285',
    src: `${import.meta.env.BASE_URL}images/36.png`,
    alt: '2d abstract in 3d space',
    prompt: '2d abstract in 3d space',
  },
  {
    style: '--sref 5137077165',
    src: `${import.meta.env.BASE_URL}images/37.png`,
    alt: 'surreal',
    prompt: 'surreal',
  },
  {
    style: '--sref 5137077165',
    src: `${import.meta.env.BASE_URL}images/38.png`,
    alt: 'emotion',
    prompt: 'emotion',
  },
  {
    style: '--sref 7743912935',
    src: `${import.meta.env.BASE_URL}images/39.png`,
    alt: 'glass pyramid',
    prompt: 'glass pyramid',
  },
  {
    style: '--sref 8526994540',
    src: `${import.meta.env.BASE_URL}images/40.png`,
    alt: 'sea world',
    prompt: 'sea world',
  },
  {
    style: '--sref 6469632050',
    src: `${import.meta.env.BASE_URL}images/41.png`,
    alt: 'fisherman',
    prompt: 'fisherman',
  },
  {
    style: '--sref 6469632050',
    src: `${import.meta.env.BASE_URL}images/42.png`,
    alt: 'observing world',
    prompt: 'observing world',
  },
  {
    style: '--sref 5018343434',
    src: `${import.meta.env.BASE_URL}images/43.png`,
    alt: 'hiking',
    prompt: 'hiking',
  },
  {
    style: '--sref 7158173333',
    src: `${import.meta.env.BASE_URL}images/44.png`,
    alt: 'house on a hill',
    prompt: 'house on a hill',
  },
  {
    style: '--sref 7249723042',
    src: `${import.meta.env.BASE_URL}images/45.png`,
    alt: 'cosmic love',
    prompt: 'cosmic love',
  },
]

const getDailyShuffleKey = (date = new Date()) => {
  const year = date.getFullYear()
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const day = String(date.getDate()).padStart(2, '0')

  return `${year}-${month}-${day}`
}

const hashString = (value) => {
  let hash = 2166136261

  for (let index = 0; index < value.length; index += 1) {
    hash ^= value.charCodeAt(index)
    hash = Math.imul(hash, 16777619)
  }

  return hash >>> 0
}

const createSeededRandom = (seed) => {
  let state = seed || 1

  return () => {
    state += 0x6d2b79f5
    let value = state
    value = Math.imul(value ^ (value >>> 15), value | 1)
    value ^= value + Math.imul(value ^ (value >>> 7), value | 61)

    return ((value ^ (value >>> 14)) >>> 0) / 4294967296
  }
}

const shuffleItemsForDay = (items, dayKey) => {
  const shuffledItems = [...items]
  const random = createSeededRandom(hashString(dayKey))

  for (let index = shuffledItems.length - 1; index > 0; index -= 1) {
    const randomIndex = Math.floor(random() * (index + 1))
    const currentItem = shuffledItems[index]
    shuffledItems[index] = shuffledItems[randomIndex]
    shuffledItems[randomIndex] = currentItem
  }

  return shuffledItems
}

const preloadImage = (src) =>
  new Promise((resolve) => {
    const image = new Image()

    image.onload = resolve
    image.onerror = resolve
    image.src = src
  })

function App() {
  const [copiedIndex, setCopiedIndex] = useState(null)
  const [dailyShuffleKey, setDailyShuffleKey] = useState(getDailyShuffleKey)
  const [loadedPriorityImages, setLoadedPriorityImages] = useState(0)
  const [isGalleryReady, setIsGalleryReady] = useState(false)
  const shuffledGalleryItems = useMemo(
    () => shuffleItemsForDay(galleryItems, dailyShuffleKey),
    [dailyShuffleKey],
  )
  const priorityImageCount = Math.min(PRIORITY_PRELOAD_COUNT, shuffledGalleryItems.length)
  const loadingProgress =
    priorityImageCount === 0
      ? 100
      : Math.round((loadedPriorityImages / priorityImageCount) * 100)

  useEffect(() => {
    if (copiedIndex === null) return

    const timeout = window.setTimeout(() => {
      setCopiedIndex(null)
    }, 2000)

    return () => window.clearTimeout(timeout)
  }, [copiedIndex])

  useEffect(() => {
    const refreshDailyShuffleKey = () => {
      setDailyShuffleKey(getDailyShuffleKey())
    }

    const interval = window.setInterval(refreshDailyShuffleKey, 60000)

    return () => window.clearInterval(interval)
  }, [])

  useEffect(() => {
    let isCancelled = false
    const priorityItems = shuffledGalleryItems.slice(0, PRIORITY_PRELOAD_COUNT)
    const remainingItems = shuffledGalleryItems.slice(PRIORITY_PRELOAD_COUNT)

    setLoadedPriorityImages(0)
    setIsGalleryReady(priorityItems.length === 0)

    const preloadPriorityImages = priorityItems.map((item) =>
      preloadImage(item.src).then(() => {
        if (!isCancelled) {
          setLoadedPriorityImages((count) => count + 1)
        }
      }),
    )

    Promise.all(preloadPriorityImages).then(() => {
      if (isCancelled) return

      setIsGalleryReady(true)
      remainingItems.forEach((item) => {
        preloadImage(item.src)
      })
    })

    return () => {
      isCancelled = true
    }
  }, [shuffledGalleryItems])

  const handleCopy = async (style, index) => {
    try {
      await navigator.clipboard.writeText(style)
      setCopiedIndex(index)
    } catch (error) {
      console.warn('Copy failed', error)
    }
  }

  return (
    <div className={`page-shell${isGalleryReady ? ' is-gallery-ready' : ''}`}>
      {!isGalleryReady && (
        <div className="loading-screen" role="status" aria-live="polite">
          <div className="loading-brand">Anna Chuprina MJ</div>
          <div className="loading-track" aria-hidden="true">
            <div className="loading-fill" style={{ width: `${loadingProgress}%` }} />
          </div>
          <div className="loading-percent">{loadingProgress}%</div>
        </div>
      )}

      <header className="page-header">
        <div className="corner-label">Anna Chuprina MJ</div>
      </header>

      <div className="page-note-row">
        <div className="page-note">
          Collection of Midjourney styles. Copy and experiment.
        </div>
        <div className="style-count">{galleryItems.length} style{galleryItems.length === 1 ? '' : 's'}</div>
      </div>

      <section className="gallery-section">
        <div className="gallery-row">
          {shuffledGalleryItems.map((item, index) => {
            const copied = copiedIndex === index
            const isPriorityImage = index < PRIORITY_PRELOAD_COUNT
            return (
              <div className="image-card" key={item.src}>
                <img
                  className="gallery-image"
                  src={item.src}
                  alt={item.alt}
                  loading="eager"
                  decoding="async"
                  fetchPriority={isPriorityImage ? 'high' : 'auto'}
                />
                <div className="prompt-text">{item.prompt.toLowerCase()}</div>
                <button
                  className="copy-style-button"
                  type="button"
                  onClick={() => handleCopy(item.style, index)}
                >
                  <span className="button-icon" aria-hidden="true">
                    <i className={copied ? 'bi bi-check-lg' : 'bi bi-clipboard'} />
                  </span>
                  {copied ? 'COPIED' : 'COPY STYLE'}
                </button>
              </div>
            )
          })}
        </div>
      </section>
    </div>
  )
}

export default App
