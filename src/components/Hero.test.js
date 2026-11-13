import { fireEvent, render, screen } from "@testing-library/react";
import Hero from "./Hero";

describe("Hero", () => {
  test("renders headline, subheadline, and call-to-action buttons", () => {
    render(<Hero scrollToSection={jest.fn()} onWhatsAppClick={jest.fn()} />);

    expect(
      screen.getByRole("heading", {
        level: 1,
        name: /قوة تدوم وأداء موثوق/i,
      })
    ).toBeInTheDocument();

    expect(
      screen.getByText(/نوفّر حلول الضخ والطاقة المتكاملة/i)
    ).toBeInTheDocument();

    expect(
      screen.getByRole("button", { name: /تصفح خدماتنا/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /اطلب استشارة عبر واتساب/i })
    ).toBeInTheDocument();
  });

  test("triggers scrollToSection and onWhatsAppClick on CTA clicks", () => {
    const scrollToSection = jest.fn();
    const onWhatsAppClick = jest.fn();

    render(
      <Hero
        scrollToSection={scrollToSection}
        onWhatsAppClick={onWhatsAppClick}
      />
    );

    fireEvent.click(screen.getByRole("button", { name: /تصفح خدماتنا/i }));
    expect(scrollToSection).toHaveBeenCalledWith("services");

    fireEvent.click(
      screen.getByRole("button", { name: /اطلب استشارة عبر واتساب/i })
    );
    expect(onWhatsAppClick).toHaveBeenCalledTimes(1);
  });
});
