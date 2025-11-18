export function withMessages(getStaticPropsFunc) {
  return async (context) => {
    const { locale = "en" } = context;

    let messages = {};
    try {
      const messagesModule = await import(`@/messages/${locale}.json`);
      messages = messagesModule.default || {};
    } catch (error) {
      // Silently fallback to English
      try {
        const enMessages = await import(`@/messages/en.json`);
        messages = enMessages.default || {};
      } catch (enError) {
        // If even English fails, use empty object
        console.warn(`Could not load messages for locale: ${locale}`, error);
        messages = {};
      }
    }

    // Ensure messages is always an object
    if (!messages || typeof messages !== "object") {
      messages = {};
    }

    if (getStaticPropsFunc) {
      const result = await getStaticPropsFunc(context);
      return {
        ...result,
        props: {
          ...(result.props || {}),
          messages,
        },
      };
    }

    return {
      props: {
        messages,
      },
    };
  };
}
