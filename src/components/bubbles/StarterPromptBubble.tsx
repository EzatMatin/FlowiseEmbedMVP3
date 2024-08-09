type Props = {
  prompt: string;
  onPromptClick?: () => void;
};

export const StarterPromptBubble = (props: Props) => (
  <>
    <div
      data-modal-target="defaultModal"
      data-modal-toggle="defaultModal"
      class="flex justify-center items-center animate-fade-in host-container hover:brightness-90 active:brightness-75"
      onClick={() => props.onPromptClick?.()}
    >
      <span
        class="whitespace-pre-wrap max-w-full chatbot-host-bubble"
        data-testid="host-bubble"
        style={{
          width: 'max-content',
          fontSize: '15px',
          border: '1px solid #2a2a2a',
          padding: '5px',
          borderRadius: '8px',
          cursor: 'pointer',
          textAlign: 'center',
          display: 'inline-block',
        }}
      >
        {props.prompt}
      </span>
    </div>
  </>
);
