PGDMP      1                 |            BookManagement    16.3    16.3 [    `           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            a           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            b           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            c           1262    22988    BookManagement    DATABASE     �   CREATE DATABASE "BookManagement" WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'Vietnamese_Vietnam.1258';
     DROP DATABASE "BookManagement";
                postgres    false            �            1259    22989    SequelizeMeta    TABLE     R   CREATE TABLE public."SequelizeMeta" (
    name character varying(255) NOT NULL
);
 #   DROP TABLE public."SequelizeMeta";
       public         heap    postgres    false            �            1259    25404 	   attribute    TABLE     �   CREATE TABLE public.attribute (
    id integer NOT NULL,
    name character varying(255),
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);
    DROP TABLE public.attribute;
       public         heap    postgres    false            �            1259    25403    attribute_id_seq    SEQUENCE     �   CREATE SEQUENCE public.attribute_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 '   DROP SEQUENCE public.attribute_id_seq;
       public          postgres    false    239            d           0    0    attribute_id_seq    SEQUENCE OWNED BY     E   ALTER SEQUENCE public.attribute_id_seq OWNED BY public.attribute.id;
          public          postgres    false    238            �            1259    25411    attributevalue    TABLE     �   CREATE TABLE public.attributevalue (
    id integer NOT NULL,
    "attributeId" integer,
    "productId" integer,
    value character varying(255),
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);
 "   DROP TABLE public.attributevalue;
       public         heap    postgres    false            �            1259    25410    attributevalue_id_seq    SEQUENCE     �   CREATE SEQUENCE public.attributevalue_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 ,   DROP SEQUENCE public.attributevalue_id_seq;
       public          postgres    false    241            e           0    0    attributevalue_id_seq    SEQUENCE OWNED BY     O   ALTER SEQUENCE public.attributevalue_id_seq OWNED BY public.attributevalue.id;
          public          postgres    false    240            �            1259    25323    cart    TABLE     0  CREATE TABLE public.cart (
    id integer NOT NULL,
    "productId" character varying(255),
    "userId" character varying(255),
    quantity character varying(255),
    total character varying(255),
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);
    DROP TABLE public.cart;
       public         heap    postgres    false            �            1259    25322    cart_id_seq    SEQUENCE     �   CREATE SEQUENCE public.cart_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 "   DROP SEQUENCE public.cart_id_seq;
       public          postgres    false    221            f           0    0    cart_id_seq    SEQUENCE OWNED BY     ;   ALTER SEQUENCE public.cart_id_seq OWNED BY public.cart.id;
          public          postgres    false    220            �            1259    25332 
   categories    TABLE     �   CREATE TABLE public.categories (
    id integer NOT NULL,
    name character varying(255),
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);
    DROP TABLE public.categories;
       public         heap    postgres    false            �            1259    25331    categories_id_seq    SEQUENCE     �   CREATE SEQUENCE public.categories_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 (   DROP SEQUENCE public.categories_id_seq;
       public          postgres    false    223            g           0    0    categories_id_seq    SEQUENCE OWNED BY     G   ALTER SEQUENCE public.categories_id_seq OWNED BY public.categories.id;
          public          postgres    false    222            �            1259    25314    comments    TABLE     2  CREATE TABLE public.comments (
    id integer NOT NULL,
    "userId" character varying(255),
    "productId" character varying(255),
    comment character varying(255),
    date character varying(255),
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);
    DROP TABLE public.comments;
       public         heap    postgres    false            �            1259    25313    comments_id_seq    SEQUENCE     �   CREATE SEQUENCE public.comments_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 &   DROP SEQUENCE public.comments_id_seq;
       public          postgres    false    219            h           0    0    comments_id_seq    SEQUENCE OWNED BY     C   ALTER SEQUENCE public.comments_id_seq OWNED BY public.comments.id;
          public          postgres    false    218            �            1259    25339    manufacturer    TABLE     �   CREATE TABLE public.manufacturer (
    id integer NOT NULL,
    "categoryId" integer,
    name character varying(255),
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);
     DROP TABLE public.manufacturer;
       public         heap    postgres    false            �            1259    25338    manufacturer_id_seq    SEQUENCE     �   CREATE SEQUENCE public.manufacturer_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 *   DROP SEQUENCE public.manufacturer_id_seq;
       public          postgres    false    225            i           0    0    manufacturer_id_seq    SEQUENCE OWNED BY     K   ALTER SEQUENCE public.manufacturer_id_seq OWNED BY public.manufacturer.id;
          public          postgres    false    224            �            1259    25346    order    TABLE     *  CREATE TABLE public."order" (
    id integer NOT NULL,
    "userId" character varying(255),
    street character varying(255),
    city character varying(255),
    phone character varying(255),
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);
    DROP TABLE public."order";
       public         heap    postgres    false            �            1259    25345    order_id_seq    SEQUENCE     �   CREATE SEQUENCE public.order_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 #   DROP SEQUENCE public.order_id_seq;
       public          postgres    false    227            j           0    0    order_id_seq    SEQUENCE OWNED BY     ?   ALTER SEQUENCE public.order_id_seq OWNED BY public."order".id;
          public          postgres    false    226            �            1259    25355    orderdetail    TABLE     8  CREATE TABLE public.orderdetail (
    id integer NOT NULL,
    "productId" character varying(255),
    "orderId" character varying(255),
    quantity character varying(255),
    total character varying(255),
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);
    DROP TABLE public.orderdetail;
       public         heap    postgres    false            �            1259    25354    orderdetail_id_seq    SEQUENCE     �   CREATE SEQUENCE public.orderdetail_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 )   DROP SEQUENCE public.orderdetail_id_seq;
       public          postgres    false    229            k           0    0    orderdetail_id_seq    SEQUENCE OWNED BY     I   ALTER SEQUENCE public.orderdetail_id_seq OWNED BY public.orderdetail.id;
          public          postgres    false    228            �            1259    25364 
   productimg    TABLE     �   CREATE TABLE public.productimg (
    id integer NOT NULL,
    "productId" character varying(255),
    img character varying(255),
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);
    DROP TABLE public.productimg;
       public         heap    postgres    false            �            1259    25363    productimg_id_seq    SEQUENCE     �   CREATE SEQUENCE public.productimg_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 (   DROP SEQUENCE public.productimg_id_seq;
       public          postgres    false    231            l           0    0    productimg_id_seq    SEQUENCE OWNED BY     G   ALTER SEQUENCE public.productimg_id_seq OWNED BY public.productimg.id;
          public          postgres    false    230            �            1259    25373    products    TABLE     �  CREATE TABLE public.products (
    id integer NOT NULL,
    "categoryId" character varying(255),
    "manufacturerId" character varying(255),
    name character varying(255),
    price integer,
    promotion integer,
    img character varying(255),
    stock integer,
    visible character varying(255),
    hot integer,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);
    DROP TABLE public.products;
       public         heap    postgres    false            �            1259    25372    products_id_seq    SEQUENCE     �   CREATE SEQUENCE public.products_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 &   DROP SEQUENCE public.products_id_seq;
       public          postgres    false    233            m           0    0    products_id_seq    SEQUENCE OWNED BY     C   ALTER SEQUENCE public.products_id_seq OWNED BY public.products.id;
          public          postgres    false    232            �            1259    25382    refreshtoken    TABLE       CREATE TABLE public.refreshtoken (
    id integer NOT NULL,
    "userId" character varying(255),
    token character varying(255),
    "expiresIn" character varying(255),
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);
     DROP TABLE public.refreshtoken;
       public         heap    postgres    false            �            1259    25381    refreshtoken_id_seq    SEQUENCE     �   CREATE SEQUENCE public.refreshtoken_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 *   DROP SEQUENCE public.refreshtoken_id_seq;
       public          postgres    false    235            n           0    0    refreshtoken_id_seq    SEQUENCE OWNED BY     K   ALTER SEQUENCE public.refreshtoken_id_seq OWNED BY public.refreshtoken.id;
          public          postgres    false    234            �            1259    25391    users    TABLE     �  CREATE TABLE public.users (
    id integer NOT NULL,
    name character varying(255),
    password character varying(255),
    email character varying(255),
    phone character varying(255),
    bom integer DEFAULT 0,
    ban boolean DEFAULT false,
    role character varying(255) DEFAULT 'user'::character varying,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);
    DROP TABLE public.users;
       public         heap    postgres    false            �            1259    25390    users_id_seq    SEQUENCE     �   CREATE SEQUENCE public.users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 #   DROP SEQUENCE public.users_id_seq;
       public          postgres    false    237            o           0    0    users_id_seq    SEQUENCE OWNED BY     =   ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;
          public          postgres    false    236            �           2604    25407    attribute id    DEFAULT     l   ALTER TABLE ONLY public.attribute ALTER COLUMN id SET DEFAULT nextval('public.attribute_id_seq'::regclass);
 ;   ALTER TABLE public.attribute ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    238    239    239            �           2604    25414    attributevalue id    DEFAULT     v   ALTER TABLE ONLY public.attributevalue ALTER COLUMN id SET DEFAULT nextval('public.attributevalue_id_seq'::regclass);
 @   ALTER TABLE public.attributevalue ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    241    240    241            �           2604    25326    cart id    DEFAULT     b   ALTER TABLE ONLY public.cart ALTER COLUMN id SET DEFAULT nextval('public.cart_id_seq'::regclass);
 6   ALTER TABLE public.cart ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    221    220    221            �           2604    25335    categories id    DEFAULT     n   ALTER TABLE ONLY public.categories ALTER COLUMN id SET DEFAULT nextval('public.categories_id_seq'::regclass);
 <   ALTER TABLE public.categories ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    222    223    223            �           2604    25317    comments id    DEFAULT     j   ALTER TABLE ONLY public.comments ALTER COLUMN id SET DEFAULT nextval('public.comments_id_seq'::regclass);
 :   ALTER TABLE public.comments ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    219    218    219            �           2604    25342    manufacturer id    DEFAULT     r   ALTER TABLE ONLY public.manufacturer ALTER COLUMN id SET DEFAULT nextval('public.manufacturer_id_seq'::regclass);
 >   ALTER TABLE public.manufacturer ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    224    225    225            �           2604    25349    order id    DEFAULT     f   ALTER TABLE ONLY public."order" ALTER COLUMN id SET DEFAULT nextval('public.order_id_seq'::regclass);
 9   ALTER TABLE public."order" ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    226    227    227            �           2604    25358    orderdetail id    DEFAULT     p   ALTER TABLE ONLY public.orderdetail ALTER COLUMN id SET DEFAULT nextval('public.orderdetail_id_seq'::regclass);
 =   ALTER TABLE public.orderdetail ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    229    228    229            �           2604    25367    productimg id    DEFAULT     n   ALTER TABLE ONLY public.productimg ALTER COLUMN id SET DEFAULT nextval('public.productimg_id_seq'::regclass);
 <   ALTER TABLE public.productimg ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    231    230    231            �           2604    25376    products id    DEFAULT     j   ALTER TABLE ONLY public.products ALTER COLUMN id SET DEFAULT nextval('public.products_id_seq'::regclass);
 :   ALTER TABLE public.products ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    233    232    233            �           2604    25385    refreshtoken id    DEFAULT     r   ALTER TABLE ONLY public.refreshtoken ALTER COLUMN id SET DEFAULT nextval('public.refreshtoken_id_seq'::regclass);
 >   ALTER TABLE public.refreshtoken ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    235    234    235            �           2604    25394    users id    DEFAULT     d   ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);
 7   ALTER TABLE public.users ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    237    236    237            E          0    22989    SequelizeMeta 
   TABLE DATA           /   COPY public."SequelizeMeta" (name) FROM stdin;
    public          postgres    false    217   h       [          0    25404 	   attribute 
   TABLE DATA           G   COPY public.attribute (id, name, "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    239   �h       ]          0    25411    attributevalue 
   TABLE DATA           i   COPY public.attributevalue (id, "attributeId", "productId", value, "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    241   �h       I          0    25323    cart 
   TABLE DATA           d   COPY public.cart (id, "productId", "userId", quantity, total, "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    221   �h       K          0    25332 
   categories 
   TABLE DATA           H   COPY public.categories (id, name, "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    223   �h       G          0    25314    comments 
   TABLE DATA           f   COPY public.comments (id, "userId", "productId", comment, date, "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    219   i       M          0    25339    manufacturer 
   TABLE DATA           X   COPY public.manufacturer (id, "categoryId", name, "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    225   7i       O          0    25346    order 
   TABLE DATA           ^   COPY public."order" (id, "userId", street, city, phone, "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    227   Ti       Q          0    25355    orderdetail 
   TABLE DATA           l   COPY public.orderdetail (id, "productId", "orderId", quantity, total, "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    229   qi       S          0    25364 
   productimg 
   TABLE DATA           T   COPY public.productimg (id, "productId", img, "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    231   �i       U          0    25373    products 
   TABLE DATA           �   COPY public.products (id, "categoryId", "manufacturerId", name, price, promotion, img, stock, visible, hot, "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    233   �i       W          0    25382    refreshtoken 
   TABLE DATA           b   COPY public.refreshtoken (id, "userId", token, "expiresIn", "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    235   �i       Y          0    25391    users 
   TABLE DATA           k   COPY public.users (id, name, password, email, phone, bom, ban, role, "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    237   ,n       p           0    0    attribute_id_seq    SEQUENCE SET     ?   SELECT pg_catalog.setval('public.attribute_id_seq', 1, false);
          public          postgres    false    238            q           0    0    attributevalue_id_seq    SEQUENCE SET     D   SELECT pg_catalog.setval('public.attributevalue_id_seq', 1, false);
          public          postgres    false    240            r           0    0    cart_id_seq    SEQUENCE SET     :   SELECT pg_catalog.setval('public.cart_id_seq', 1, false);
          public          postgres    false    220            s           0    0    categories_id_seq    SEQUENCE SET     @   SELECT pg_catalog.setval('public.categories_id_seq', 1, false);
          public          postgres    false    222            t           0    0    comments_id_seq    SEQUENCE SET     >   SELECT pg_catalog.setval('public.comments_id_seq', 1, false);
          public          postgres    false    218            u           0    0    manufacturer_id_seq    SEQUENCE SET     B   SELECT pg_catalog.setval('public.manufacturer_id_seq', 1, false);
          public          postgres    false    224            v           0    0    order_id_seq    SEQUENCE SET     ;   SELECT pg_catalog.setval('public.order_id_seq', 1, false);
          public          postgres    false    226            w           0    0    orderdetail_id_seq    SEQUENCE SET     A   SELECT pg_catalog.setval('public.orderdetail_id_seq', 1, false);
          public          postgres    false    228            x           0    0    productimg_id_seq    SEQUENCE SET     @   SELECT pg_catalog.setval('public.productimg_id_seq', 1, false);
          public          postgres    false    230            y           0    0    products_id_seq    SEQUENCE SET     >   SELECT pg_catalog.setval('public.products_id_seq', 1, false);
          public          postgres    false    232            z           0    0    refreshtoken_id_seq    SEQUENCE SET     B   SELECT pg_catalog.setval('public.refreshtoken_id_seq', 15, true);
          public          postgres    false    234            {           0    0    users_id_seq    SEQUENCE SET     :   SELECT pg_catalog.setval('public.users_id_seq', 2, true);
          public          postgres    false    236            �           2606    22993     SequelizeMeta SequelizeMeta_pkey 
   CONSTRAINT     d   ALTER TABLE ONLY public."SequelizeMeta"
    ADD CONSTRAINT "SequelizeMeta_pkey" PRIMARY KEY (name);
 N   ALTER TABLE ONLY public."SequelizeMeta" DROP CONSTRAINT "SequelizeMeta_pkey";
       public            postgres    false    217            �           2606    25409    attribute attribute_pkey 
   CONSTRAINT     V   ALTER TABLE ONLY public.attribute
    ADD CONSTRAINT attribute_pkey PRIMARY KEY (id);
 B   ALTER TABLE ONLY public.attribute DROP CONSTRAINT attribute_pkey;
       public            postgres    false    239            �           2606    25416 "   attributevalue attributevalue_pkey 
   CONSTRAINT     `   ALTER TABLE ONLY public.attributevalue
    ADD CONSTRAINT attributevalue_pkey PRIMARY KEY (id);
 L   ALTER TABLE ONLY public.attributevalue DROP CONSTRAINT attributevalue_pkey;
       public            postgres    false    241            �           2606    25330    cart cart_pkey 
   CONSTRAINT     L   ALTER TABLE ONLY public.cart
    ADD CONSTRAINT cart_pkey PRIMARY KEY (id);
 8   ALTER TABLE ONLY public.cart DROP CONSTRAINT cart_pkey;
       public            postgres    false    221            �           2606    25337    categories categories_pkey 
   CONSTRAINT     X   ALTER TABLE ONLY public.categories
    ADD CONSTRAINT categories_pkey PRIMARY KEY (id);
 D   ALTER TABLE ONLY public.categories DROP CONSTRAINT categories_pkey;
       public            postgres    false    223            �           2606    25321    comments comments_pkey 
   CONSTRAINT     T   ALTER TABLE ONLY public.comments
    ADD CONSTRAINT comments_pkey PRIMARY KEY (id);
 @   ALTER TABLE ONLY public.comments DROP CONSTRAINT comments_pkey;
       public            postgres    false    219            �           2606    25344    manufacturer manufacturer_pkey 
   CONSTRAINT     \   ALTER TABLE ONLY public.manufacturer
    ADD CONSTRAINT manufacturer_pkey PRIMARY KEY (id);
 H   ALTER TABLE ONLY public.manufacturer DROP CONSTRAINT manufacturer_pkey;
       public            postgres    false    225            �           2606    25353    order order_pkey 
   CONSTRAINT     P   ALTER TABLE ONLY public."order"
    ADD CONSTRAINT order_pkey PRIMARY KEY (id);
 <   ALTER TABLE ONLY public."order" DROP CONSTRAINT order_pkey;
       public            postgres    false    227            �           2606    25362    orderdetail orderdetail_pkey 
   CONSTRAINT     Z   ALTER TABLE ONLY public.orderdetail
    ADD CONSTRAINT orderdetail_pkey PRIMARY KEY (id);
 F   ALTER TABLE ONLY public.orderdetail DROP CONSTRAINT orderdetail_pkey;
       public            postgres    false    229            �           2606    25371    productimg productimg_pkey 
   CONSTRAINT     X   ALTER TABLE ONLY public.productimg
    ADD CONSTRAINT productimg_pkey PRIMARY KEY (id);
 D   ALTER TABLE ONLY public.productimg DROP CONSTRAINT productimg_pkey;
       public            postgres    false    231            �           2606    25380    products products_pkey 
   CONSTRAINT     T   ALTER TABLE ONLY public.products
    ADD CONSTRAINT products_pkey PRIMARY KEY (id);
 @   ALTER TABLE ONLY public.products DROP CONSTRAINT products_pkey;
       public            postgres    false    233            �           2606    25389    refreshtoken refreshtoken_pkey 
   CONSTRAINT     \   ALTER TABLE ONLY public.refreshtoken
    ADD CONSTRAINT refreshtoken_pkey PRIMARY KEY (id);
 H   ALTER TABLE ONLY public.refreshtoken DROP CONSTRAINT refreshtoken_pkey;
       public            postgres    false    235            �           2606    25398    users users_pkey 
   CONSTRAINT     N   ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);
 :   ALTER TABLE ONLY public.users DROP CONSTRAINT users_pkey;
       public            postgres    false    237            E   �   x�m�1�0{�őc@�GB�GT4��	�؎�w�GJ�B9S�w~�λî��X-��Û6���+`�C������)�r����r�q��̹� �8le}���y�o�J��I�Ǉ
��M��꾪f$�8�I�rpo�1}�oa      [      x������ � �      ]      x������ � �      I      x������ � �      K      x������ � �      G      x������ � �      M      x������ � �      O      x������ � �      Q      x������ � �      S      x������ � �      U      x������ � �      W   T  x���[o�X���+���D�7��z�B-d�FP��¯�7Ә�;�K�^�O�����e_)�+y�"Rd����g9[1�Df���m=Q�dS�����-⦐�]SPM�Rk�RM�\e伅��7���*$H�y��Ie�)sv|�Z�هk]�qy�OvL"#`�L���5����z�5�Aԣ ��(j�{�j�8 z��.��(���(������>��?��M6����C<�V8|R7��K{,Ҽ�_-���>8^UQ}�5ݖ�9̃�i��G=�o��`�0���@��՛�{�Z�5��\��㦪fz�z�`"۫��a��.I���֦'Q�Ox���$�`��%�!.&8�E7t�	�vf�J=�����u�Jn<]���oN��i^��ihc�����m�a9��."���z�a���������]���P����e�ΐ���J�u�^�=iyd�x4����m�y]���E�!h��&��s���_�|V��y�ء2��ei�o�:�����b���#�<�o���~��"��o!5�����gJ���u,�˷��.�hO��o�|�K>�K�#fxS��ų#H=�o��p@a�w1��T�f��{���8)���	%S=�E$��x��ꨞ@�ngY�{o��/fx�����#���_m}{���v��n��C��k�W^-�-���;���p����b�%^�o'�։��U�����#�"���:ԃ�K����K�.��-��ds���"9J�(߉�T��0�ˤ��X��9R���6�|;�aw���0r�Bۑ3(p�gl<ܨ4�I$�R���fO_��y��`�ԛ���`�9�W�����>"`W��3��_I���.h�څ�;�e���f����t���T�8/J�[�V�,�����M����>"`W�S�����u��N`\����Y :�t�x7y!׺dqN)�E�b�O����qجX<�߄�]��ƞ����ڛ	����:������k�K��	ݺ�v��ׯ,=LߔT��v�ɝC�I��0����]��V�z�s��y&��gWoVLR�g]S�/@��_z�S�;��A�~K���7��+"�&	��W<@�      Y   �   x�u�M�@����_��]���3��*+!�
i3�Y���,��A�0��y�!Hk�Zk�[k�ô5qOHЇrV7�|q�k�m��)�̳z G.��ɳ8B�)G���6?؄vW��-/�(�8K��R�����*�ʜ�4,�2-�ٹ�IHʨ�����	�KJ :ܧb?���{��D�     