import Link from "./Link";
import Wrapper from "./Wrapper";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { default as NextLink } from "next/link";
import { faArrowRight } from "@fortawesome/pro-regular-svg-icons";

import { mdxComponents, BlockNotification } from "@un/react";

const components = {
  BlockNotification,
  wrapper: Wrapper,
  ...mdxComponents,
  IconArrowRight: () => <FontAwesomeIcon icon={faArrowRight} />,
  faArrowRight,
  NextLink,
};

export default components;
