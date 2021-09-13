import { createContext, useContext, useState, useMemo } from "react";

const ModalStateContext = createContext({
  cartOpen: false
});

export const useModalState = () => {
  const ctx = useContext(ModalStateContext);
  if (!ctx) {
    throw new Error("useSidebarCart is not inside SidebarCartProvider");
  }
  return ctx;
};

export const ModalStateProvider = (props) => {
  const [cartOpen, setCartOpen] = useState(false);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const toggleCart = () => {
    setCartOpen(!cartOpen);
  };

  const value = useMemo(() => {
    return {
      cartOpen,
      toggleCart
    };
  }, [cartOpen, toggleCart]);

  return <ModalStateContext.Provider value={value} {...props} />;
};
