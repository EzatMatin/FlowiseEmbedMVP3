type Props = {
  prompt: string;
  onPromptClick?: () => void;
  starterPromptFontSize?: number;
  starterPromptBorderColor?: string;
  starterPromptBorderRadius?: number;
  starterPromptPaddingX?: number;
  starterPromptPaddingY?: number;
  starterPromptBoxShadow?: string;
  starterPromptBackgroundColor?: string;
};

export const StarterPromptBubble = (props: Props) => (
  <>
    <div
      data-modal-target="defaultModal"
      data-modal-toggle="defaultModal"
      class="flex justify-start items-start animate-fade-in host-container hover:brightness-90 active:brightness-75"
      onClick={() => props.onPromptClick?.()}
    >
      <span
        class="ml-1 whitespace-pre-wrap max-w-full chatbot-host-bubble"
        data-testid="host-bubble"
        style={{
          width: 'max-content',
          'font-size': props.starterPromptFontSize ? `${props.starterPromptFontSize}px` : '15px',
          cursor: 'pointer',
          'padding': `${props.starterPromptPaddingY || 10}px ${props.starterPromptPaddingX || 5}px`,  // Customizable padding
          'border': `1px solid ${props.starterPromptBorderColor || 'black'}`,  // Customizable border color
          'border-radius': `${props.starterPromptBorderRadius || 10}px`,  // Customizable border radius
          'box-shadow': props.starterPromptBoxShadow || '0px 4px 6px rgba(0, 0, 0, 0.1)',  // Customizable shadow
          'background-color': props.starterPromptBackgroundColor || 'white',  // Customizable background color
        }}
      >
        {props.prompt}
      </span>
    </div>
  </>
);
