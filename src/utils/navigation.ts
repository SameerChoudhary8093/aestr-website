import { isHomePath, withBasePath } from "@/lib/site";

export const scrollToRegistrationForm = () => {
  if (typeof window === "undefined") return;

  const homeFormHash = withBasePath("/#registration-form");

  if (!isHomePath(window.location.pathname)) {
    window.location.href = homeFormHash;
    return;
  }

  const element = document.getElementById("registration-form");
  if (element) {
    element.scrollIntoView({ behavior: "smooth", block: "center" });
    if (window.location.hash !== "#registration-form") {
      window.history.replaceState(null, "", homeFormHash);
    }
    return;
  }

  window.location.hash = "registration-form";
};
