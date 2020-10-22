// Libraries
import React, { useState, useContext } from 'react'

// Context
import i18nContext from '#context/i18n-context'

// Components
import Button from '#components/global/button'

// Lazy
const Email = React.lazy(() =>
  import("./email")
)


// ============================================================================================================ Logic

function ContactButton({ className }) {
  const i18n = useContext(i18nContext)
  const [showingEmail, setShowingEmail] = useState(false);

  return (
      <React.Suspense fallback={<Button className={className}>{i18n.format({ id: "loading" })}</Button>}>
        {showingEmail
          ? <Email className={className}/>
          : <Button className={className} onClick={() => setShowingEmail(true)}>{i18n.format({ id: "infos.contactButtonLabel" })}</Button>
        }
      </React.Suspense>
  )
}

export default ContactButton