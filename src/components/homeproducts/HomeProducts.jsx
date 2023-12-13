import React from 'react';
import { fetchData } from '../../utils/fetchData';

function HomeProducts() {
  // const LayoutProducts = styled.section`
  //   width: 90%;
  //   height: 500px;
  //   margin: auto;
  //   border: 1px solid black;
  // `;

  // const CardProducts = styled.div`
  //   display: grid;
  //   grid-template-columns: repeat(auto-fit, minmax(170px, 1fr));
  //   grid-gap: 0.5rem;
  //   @media (width < 500px) {
  //     grid-template-columns: repeat(2, minmax(80px, 200px));
  //   }
  // `;

  // const ContentCardProduct = styled.div`
  //   width: 100%;
  //   margin-top: 1rem;
  //   height: 300px;
  //   display: grid;
  //   grid-template-rows: 13rem 2rem 1rem;
  //   grid-row-gap: 0.5rem;
  //   border-radius: 10px;
  //   box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.034), 0 6.7px 5.3px rgba(0, 0, 0, 0.048), 0 12.5px 10px rgba(0, 0, 0, 0.06), 0 22.3px 17.9px rgba(0, 0, 0, 0.072), 0 41.8px 33.4px rgba(0, 0, 0, 0.086), 0 100px 80px rgba(0, 0, 0, 0.12);
  // `;

  // const ImageProducts = styled.img`
  //   width: 120px;
  //   object-fit: cover;
  //   background-size: cover;
  //   overflow-y: hidden;
  //   margin: auto;
  // `;

  // const TitleProducts = styled.div`
  //   height: 2rem;
  //   overflow: hidden;
  //   padding: 0 0 0 0.6rem;
  // `;

  // const PriceProducts = styled(TitleProducts)`
  //   height: 1rem;
  //   overflow: hidden;
  // `;

  // const InformationSell = styled(PriceProducts)`
  //   color: #8495a7;
  // `;

  const { data } = fetchData('https://fakestoreapi.com/products');

  return (
    <>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet accusantium nobis, possimus quos mollitia deserunt sequi omnis recusandae corrupti quae officiis, voluptatum quo atque sapiente aliquam sunt fugiat vel laudantium sit
        ratione harum dolore assumenda aut! Nobis aut beatae dicta, quo iure inventore adipisci quibusdam id at laudantium, deserunt sit? Inventore, illo tenetur nesciunt nobis vitae quia natus deserunt dignissimos distinctio est officia
        repellendus nam aperiam corporis molestiae. Nobis, expedita, placeat asperiores veniam quibusdam quia obcaecati delectus, rerum natus perspiciatis nesciunt quae. Accusamus enim corrupti eos assumenda, commodi, error vel blanditiis
        repellat unde autem praesentium consequuntur id incidunt officia quae!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, vitae. Eligendi minima molestiae dolores quidem velit fugit autem repudiandae qui dolor saepe nihil, temporibus officia vero at excepturi soluta ipsum dolorem
        magni possimus necessitatibus explicabo vel eius. Ut id recusandae, ea, error facere asperiores magni modi voluptatum nostrum quia aliquam. Nemo ad id aspernatur eveniet dolores ipsa voluptatum sequi, mollitia ipsam velit facere
        similique rem repudiandae vero nulla. Debitis, eum officiis natus beatae alias placeat quis necessitatibus, dolorum ad id repudiandae? Praesentium facilis repellendus nesciunt in! Tempora amet soluta corporis nam, molestias
        recusandae ab velit porro necessitatibus harum? Expedita, earum ex, animi praesentium voluptas tempora voluptate, sed nam sit magnam distinctio eos quas laboriosam repellendus explicabo. Porro iste debitis adipisci, quod, asperiores
        reprehenderit quasi eveniet perferendis ullam veniam doloremque cum corporis aliquid quibusdam cumque sit. Sit assumenda corrupti quia illo velit? Nisi, ipsa? Voluptas labore nam repellendus, cupiditate ducimus, illum quia nostrum a
        nobis deleniti consectetur dolorum sapiente, nesciunt accusamus molestias doloremque suscipit iure adipisci amet modi non perferendis est mollitia odio! Tenetur id, ratione laudantium possimus assumenda, ea consequatur, quod ab
        animi similique ipsum porro ullam iure cupiditate! Amet rem quasi asperiores tenetur quibusdam. Suscipit nostrum vero atque voluptate est! Nulla inventore ratione explicabo deserunt recusandae? Vitae, doloribus. Illo exercitationem,
        commodi minima, deleniti iste sapiente placeat expedita error optio ipsam vitae at molestias atque necessitatibus. Deleniti in cum quibusdam voluptate impedit vitae maxime ex dolore quas quos! Deserunt id tempora reprehenderit,
        officia, cum unde corrupti possimus architecto soluta eos cumque repudiandae vero iure, quae eum magnam dignissimos impedit temporibus non ad repellat quasi tenetur laborum. Nostrum perspiciatis voluptate accusamus necessitatibus.
        Incidunt officia voluptatem ea vel id dolorum veniam, hic, ratione nisi itaque temporibus beatae doloribus ex dolore facere commodi facilis earum autem fugit deleniti. Beatae recusandae, consequuntur aliquid harum blanditiis non,
        inventore placeat tenetur obcaecati eum eligendi, hic quam eaque sit repudiandae? Numquam quis ad, consequuntur natus omnis animi qui id temporibus quia, sed ipsam officiis quos debitis labore quisquam rerum. Nisi rem consequuntur
        necessitatibus minima debitis asperiores temporibus saepe? Placeat reiciendis consequuntur molestiae sint. Facilis tenetur, eos mollitia atque tempore, aspernatur ullam reprehenderit consectetur eum quas quidem ab non animi
        reiciendis inventore! Quod laborum assumenda at. Aliquid accusantium porro dolor, aut repellendus, obcaecati fuga maxime quo accusamus officiis alias explicabo, eum minus animi laboriosam dolorem excepturi nobis? Aliquid nemo iure
        beatae, autem, magni ea alias ratione aliquam repellat dicta fugit distinctio placeat ad architecto, labore temporibus. Eligendi vel debitis nostrum minima praesentium consequuntur odit ducimus, deleniti exercitationem nulla
        distinctio voluptatem itaque illo ipsa doloremque necessitatibus numquam neque nisi perferendis voluptates quidem? Quam soluta explicabo suscipit laboriosam quod beatae neque magnam nemo doloribus minus esse, praesentium deleniti
        perferendis pariatur ipsa assumenda aliquam sit quaerat sint quis sunt excepturi nulla quia corrupti! Quibusdam laudantium, non dolorum, nobis eius architecto beatae corrupti, excepturi itaque minima perferendis reiciendis
        laboriosam. Quisquam nulla nihil dignissimos qui ea error odio deleniti incidunt accusantium eligendi vero eaque consequatur maxime voluptate consectetur omnis, vel, repudiandae praesentium necessitatibus.
      </p>
      {/* <LayoutProducts>
        <CardProducts>
          {data.map(({ id, image, title, price }) => {
            return (
              <ContentCardProduct key={id}>
                <ImageProducts src={image} alt="img-products" />
                <TitleProducts>
                  <h1>{title}</h1>
                </TitleProducts>
                <PriceProducts>
                  <h5>{price}</h5>
                </PriceProducts>
                <InformationSell>
                  <p>999+ Terjual</p>
                </InformationSell>
              </ContentCardProduct>
            );
          })}
        </CardProducts>
      </LayoutProducts> */}
    </>
  );
}

export default HomeProducts;
