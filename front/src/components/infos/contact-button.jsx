import React, { useState } from 'react'
import { useIntl } from "gatsby-plugin-react-intl"
import Button from '#components/global/button'

const Email = React.lazy(() =>
  import("./email")
)

function ContactButton({ className }) {
    const intlFormat = useIntl().formatMessage
    const [showingEmail, setShowingEmail] = useState(false);

    let email = showingEmail ? (
        <Email className={className}/>
      ) : (
        <Button className={className} onClick={() => setShowingEmail(true)}>{intlFormat({ id: "infos.contactButtonLabel" })}</Button>
      );

    return (
        <React.Suspense fallback={<Button className={className}>{intlFormat({ id: "loading" })}</Button>}>
            {email}
        </React.Suspense>
    )
}

export default ContactButton