type Props = {
  prompt: string;
  onPromptClick?: () => void;
  starterPromptFontSize?: number;
};

export const StarterPromptBubble = (props: Props) => (
  <>
    <div
      data-modal-target="defaultModal"
      data-modal-toggle="defaultModal"
      class="flex max-w-3xl flex-wrap justify-center items-center gap-2 animate-fade-in hover:brightness-90 active:brightness-75"
      onClick={() => props.onPromptClick?.()}
    >
      <span
        class="relative flex w-auto flex-col gap-2 rounded-2xl border border-token-border-light px-3 pb-4 pt-3 text-start align-top text-[15px] shadow-xxs transition enabled:hover:bg-token-main-surface-secondary disabled:cursor-not-allowed"
        data-testid="host-bubble"
        style={{
          width: 'max-content',
          'font-size': props.starterPromptFontSize ? `${props.starterPromptFontSize}px` : '15px',
          cursor: 'pointer',
        }}
      >
        {props.prompt}
      </span>
    </div>
  </>
);
