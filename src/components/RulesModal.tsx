import React from "react";
import * as Dialog from "@radix-ui/react-dialog";
import styled from "styled-components";
import Image from "next/image";
import closeIcon from "public/images/icon-close.svg";
import rulesImage from "public/images/image-rules.svg";
import { MOBILE_SCREEN_WIDTH_PX } from "../constants";

const StyledRulesButton = styled.button`
  background-color: transparent;
  border: 2px solid hsl(217, 16%, 45%);
  border-radius: 10px;
  cursor: pointer;
  padding: 10px 30px;
  color: #fff;
  position: absolute;
  right: 16px;
  bottom: 16px;
`;

const StyledCloseButton = styled.button`
  border: 0;
  background-color: #fff;
  border-radius: 100%;
  height: 25px;
  width: 25px;
  cursor: pointer;
`;

const Overlay = styled(Dialog.Overlay)`
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  inset: 0;
`;

const DialogContent = styled(Dialog.Content)`
  background-color: #fff;
  border-radius: 10px;
  box-shadow: hsl(206 22% 7% / 35%) 0px 10px 38px -10px,
    hsl(206 22% 7% / 20%) 0px 10px 20px -15px;
  position: fixed;
  top: 50%;
  left: 50%;
  width: 90vw;
  max-width: 450px;
  max-height: 85vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  transform: translate(-50%, -50%);
  padding-bottom: 25px;

  @media (max-width: ${MOBILE_SCREEN_WIDTH_PX}) {
    border-radius: 0;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    max-height: 100vh;
    transform: none;
  }
`;

const ScreenReaderOnly = styled(Dialog.Description)`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
`;

const FlexHeader = styled.div`
  display: flex;
  justify-content: space-between;
  width: 90%;
  padding: 25px;
`;

const Title = styled(Dialog.Title)`
  margin: 0;
`;

export const RulesModal = () => (
  <Dialog.Root>
    <Dialog.Trigger asChild>
      <StyledRulesButton aria-label="open rules">RULES</StyledRulesButton>
    </Dialog.Trigger>
    <Dialog.Portal>
      <Overlay />
      <DialogContent>
        <FlexHeader>
          <Title>RULES</Title>
          <Dialog.Close asChild>
            <StyledCloseButton aria-label="close rules">
              <Image src={closeIcon} alt={"Close"} />
            </StyledCloseButton>
          </Dialog.Close>
        </FlexHeader>
        <ScreenReaderOnly>
          Paper beats rock, rock beats scissors and scissors beats paper.
        </ScreenReaderOnly>
        <Image src={rulesImage} alt={"Rules"} />
      </DialogContent>
    </Dialog.Portal>
  </Dialog.Root>
);
