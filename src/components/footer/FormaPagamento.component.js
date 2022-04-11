function FormaPagamento() {
  return (
    <section className="formaPagamento">
      <div className="card">
        <p className="card__title">Formas de pagamento</p>
        <ul className="card__list">
          <li>
            <img src="img/icons/icons-elo.png" />
          </li>
          <li>
            <img src="img/icons/icons-visa.png" />
          </li>
          <li>
            <img src="img/icons/icons-mastercard.png" />
          </li>
          <li>
            <img src="img/icons/icons-boleto.png" />
          </li>
          <li>
            <img src="img/icons/icons-diners.png" />
          </li>
          <li>
            <img src="img/icons/icons-american.png" />
          </li>
        </ul>
      </div>
      <div className="security">
        <p className="security__title">Segurança</p>
        <img className="security__img" src="./img/icons/icons-encrypt.png" />
      </div>
      <span className="span__bottom"></span>
    </section>
  );
}
export default FormaPagamento;
