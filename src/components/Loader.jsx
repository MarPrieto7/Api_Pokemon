import { DotSpinner } from '@uiball/loaders';

export const Loader = () => {
	return (
        <div className="container-loader">
            <DotSpinner size={40} speed={0.9} color='black' />;
        </div>
    )
};

//cuando busco un pokemon o clicleo en unno, me sale un icono como la pagina cargando.