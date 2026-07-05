import { useEffect, useState } from 'react'
import './App.css'

const galleryItems = [
  {
    style: '--sref 7440192674',
    src: '${process.env.PUBLIC_URL}/images/1.png',
    alt: 'MIDJOURNEY STYLE 1',
    prompt: '',
  },
  {
    style: '--sref 7476978753',
    src: '${process.env.PUBLIC_URL}/images/2.png',
    alt: 'Dog holding a leaf',
    prompt: 'Dog holding a leaf',
  },
  {
    style: '--sref 6213523175',
    src: '${process.env.PUBLIC_URL}/images/3.png',
    alt: 'Garden',
    prompt: 'Garden',
  },
  {
    style: '--sref 5648081772',
    src: '${process.env.PUBLIC_URL}/images/8.png',
    alt: 'Woman is sitting on a branch',
    prompt: 'Woman is sitting on a branch',
  },
  {
    style: '--sref 7268283103',
    src: '${process.env.PUBLIC_URL}/images/5.png',
    alt: 'Bird',
    prompt: 'Bird',
  },
  {
    style: '--sref 7268283103',
    src: '${process.env.PUBLIC_URL}/images/6.png',
    alt: 'Sunrise',
    prompt: 'Person is viewing sunrise',
  },
  {
    style: '--sref 6609586403',
    src: '${process.env.PUBLIC_URL}/images/7.png',
    alt: 'Woman portrait',
    prompt: 'Woman portrait',
  },
  {
    style: '--sref 6535417993',
    src: '${process.env.PUBLIC_URL}/images/9.png',
    alt: 'Statue',
    prompt: 'Statue',
  },
  {
    style: '--sref 7762567854',
    src: '${process.env.PUBLIC_URL}/images/10.png',
    alt: 'Picnic',
    prompt: 'Picnic',
  },
  {
    style: '--sref 5666189692',
    src: '${process.env.PUBLIC_URL}/images/11.png',
    alt: 'Balancing stones',
    prompt: 'Balancing stones',
  },
  {
    style: '--sref 7827189344',
    src: '${process.env.PUBLIC_URL}/images/12.png',
    alt: 'Lake in a forest',
    prompt: 'Lake in a forest',
  },
  {
    style: '--sref 7790286388',
    src: '${process.env.PUBLIC_URL}/images/13.png',
    alt: 'Snail carying small snail',
    prompt: 'Snail carying small snail',
  },
  {
    style: '--sref 4379256578',
    src: '${process.env.PUBLIC_URL}/images/14.png',
    alt: 'Bridge',
    prompt: 'Bridge',
  },
  {
    style: '--sref 5742545310',
    src: '${process.env.PUBLIC_URL}/images/15.png',
    alt: 'Northen lights',
    prompt: 'Northen lights',
  },
  {
    style: '--sref 5988056550',
    src: '${process.env.PUBLIC_URL}/images/16.png',
    alt: 'Vase with flower',
    prompt: 'Vase with flower',
  },
  {
    style: '--sref 7366854016 7268283103',
    src: '${process.env.PUBLIC_URL}/images/17.png',
    alt: 'Flower crown',
    prompt: 'Flower crown',
  },
  {
    style: '--sref 7198770506',
    src: '${process.env.PUBLIC_URL}/images/18.png',
    alt: 'Magic',
    prompt: 'Magic',
  },
  {
    style: '--sref 6232303497',
    src: '${process.env.PUBLIC_URL}/images/19.png',
    alt: 'MIDJOURNEY STYLE 19',
    prompt: '',
  },
  {
    style: '--sref 8161832504 5666189692 7790286388',
    src: '${process.env.PUBLIC_URL}/images/20.png',
    alt: 'MIDJOURNEY STYLE 20',
    prompt: 'Loaf of bread',
  },
  {
    style: '--sref 7936152627',
    src: '${process.env.PUBLIC_URL}/images/21.png',
    alt: 'Cat in the flower field',
    prompt: 'Cat in the flower field',
  },
  {
    style: '--sref 7957040092',
    src: '${process.env.PUBLIC_URL}/images/22.png',
    alt: 'Butterflies',
    prompt: 'Butterflies',
  },
  {
    style: '--sref 6771827822',
    src: '${process.env.PUBLIC_URL}/images/23.png',
    alt: 'Greek myths',
    prompt: 'Greek myths',
  },
  {
    style: '--sref 5397164518',
    src: '${process.env.PUBLIC_URL}/images/24.png',
    alt: 'Fantastic chreature',
    prompt: 'Fantastic chreature',
  },
  {
    style: '--sref 7356350689',
    src: '${process.env.PUBLIC_URL}/images/25.png',
    alt: 'Glass pomegranate',
    prompt: 'Glass pomegranate',
  },
  {
    style: '--sref 6005291080',
    src: '${process.env.PUBLIC_URL}/images/26.png',
    alt: 'Bloom',
    prompt: 'Bloom',
  },
  {
    style: '--sref 7791583285',
    src: '${process.env.PUBLIC_URL}/images/27.png',
    alt: 'Landscape',
    prompt: 'Landscape',
  },
  {
    style: '--sref 5302701543',
    src: '${process.env.PUBLIC_URL}/images/28.png',
    alt: 'Portrait',
    prompt: 'Portrait',
  },
  {
    style: '--sref 5664801964',
    src: '${process.env.PUBLIC_URL}/images/29.png',
    alt: 'Bar',
    prompt: 'Bar',
  },
  {
    style: '--sref 5302701543',
    src: '${process.env.PUBLIC_URL}/images/30.png',
    alt: 'Cocktail',
    prompt: 'Cocktail',
  },
  {
    style: '--sref 6937524997',
    src: '${process.env.PUBLIC_URL}/images/31.png',
    alt: 'Library',
    prompt: 'Library',
  },
  {
    style: '--sref 6937524997',
    src: '${process.env.PUBLIC_URL}/images/32.1.png',
    alt: 'Classic art',
    prompt: 'Classic art',
  },
  {
    style: '--sref 6545273707',
    src: '${process.env.PUBLIC_URL}/images/33.png',
    alt: 'Peace',
    prompt: 'Peace',
  },
  {
    style: '--sref 4441123909',
    src: '${process.env.PUBLIC_URL}/images/34.png',
    alt: 'Stockholm',
    prompt: 'Stockholm',
  },
  {
    style: '--sref 7339699678',
    src: '${process.env.PUBLIC_URL}/images/35.png',
    alt: 'People',
    prompt: 'People',
  },
  {
    style: '--sref 6979214285',
    src: '${process.env.PUBLIC_URL}/images/36.png',
    alt: '2d abstract in 3d space',
    prompt: '2d abstract in 3d space',
  },
  {
    style: '--sref 5137077165',
    src: '${process.env.PUBLIC_URL}/images/37.png',
    alt: 'surreal',
    prompt: 'surreal',
  },
  {
    style: '--sref 5137077165',
    src: '${process.env.PUBLIC_URL}/images/38.png',
    alt: 'emotion',
    prompt: 'emotion',
  },
  {
    style: '--sref 7743912935',
    src: '${process.env.PUBLIC_URL}/images/39.png',
    alt: 'glass pyramid',
    prompt: 'glass pyramid',
  },
  {
    style: '--sref 8526994540',
    src: '${process.env.PUBLIC_URL}/images/40.png',
    alt: 'sea world',
    prompt: 'sea world',
  },
  {
    style: '--sref 6469632050',
    src: '${process.env.PUBLIC_URL}/images/41.png',
    alt: 'fisherman',
    prompt: 'fisherman',
  },
  {
    style: '--sref 6469632050',
    src: '${process.env.PUBLIC_URL}/images/42.png',
    alt: 'observing world',
    prompt: 'observing world',
  },
]

function App() {
  const [copiedIndex, setCopiedIndex] = useState(null)

  useEffect(() => {
    if (copiedIndex === null) return

    const timeout = window.setTimeout(() => {
      setCopiedIndex(null)
    }, 2000)

    return () => window.clearTimeout(timeout)
  }, [copiedIndex])

  const handleCopy = async (style, index) => {
    try {
      await navigator.clipboard.writeText(style)
      setCopiedIndex(index)
    } catch (error) {
      console.warn('Copy failed', error)
    }
  }

  return (
    <div className="page-shell">
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
          {galleryItems.map((item, index) => {
            const copied = copiedIndex === index
            return (
              <div className="image-card" key={item.src}>
                <img className="gallery-image" src={item.src} alt={item.alt} />
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
