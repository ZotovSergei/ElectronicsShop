import { useIntl } from "react-intl";
import { i18nKeys } from "utils/typings";

const useTranslations = () => {
  const { formatMessage } = useIntl();
  return (text: i18nKeys) =>
    formatMessage({ id: text, defaultMessage: undefined });
};

export default useTranslations;
